import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiChevronDown, FiLogOut, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BTNProfile = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const auth = useSelector(store => store.auth)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {auth ? <>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{ paddingLeft: "0", paddingRight: "0", marginRight: "0" }}
        >
          <div className="flex items-center text-xl lg:text-2xl text-slate-500" >
            <FiUser />
            <FiChevronDown className="text-lg" />
          </div>
        </Button >
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleClose()}>
            <Link to="/" className="text-sm flex items-center gap-x-1">
              <FiUser className="text-lg text-blue-500" />
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose()

          }}>
            <div className="text-sm flex items-center gap-x-1">
              <FiLogOut className="text-lg text-red-500 rotate-180" />
              <span className="text-sm" >SignOut</span>
            </div>
          </MenuItem>
        </Menu>
      </> :
        <Link to="/sign-in" className="flex items-center gap-x-1 text-sm lg:text-base text-slate-500" >
          <FiLogOut />
          <span>login</span>
        </Link>}
    </div >
  );
}

export default BTNProfile;