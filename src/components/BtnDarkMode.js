import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiCheck, FiChevronDown, FiChevronsDown, FiMoon, FiSun } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { themeDark, themeLight } from '../redux/theme/themeActions';

const BtnDarkMode = () => {

  const themeState = useSelector(value => value.theme)
  const dispatch = useDispatch()

  React.useEffect(() => {
    themeState === "dark" ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [])

  const [theme, setTheme] = React.useState(themeState)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ paddingLeft: "0", paddingRight: "0", marginRight: "-0.7rem" }}
      >
        {themeState === "dark" ? <div className="flex items-center">
          <FiMoon className="text-blue-500 text-xl lg:text-2xl" />
          <FiChevronDown className="text-blue-500 text-xl" />
        </div> : <div div className="flex items-center">
          <FiSun className="text-blue-500 text-xl lg:text-2xl" />
          <FiChevronDown className="text-blue-500 text-xl" />
        </div>}
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
        <MenuItem onClick={() => {
          handleClose()
          dispatch(themeLight())
        }}>
          <div className='flex items-center text-sm p-1'>
            {themeState === "light" && <FiCheck className="text-green-500 text-xl mr-2" />}
            <FiSun className="text-zinc-900 text-xl mr-1" />
            Light
          </div>
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          dispatch(themeDark())
        }}>
          <div className='flex items-center text-sm p-1'>
            {themeState === "dark" && <FiCheck className="text-green-500 text-xl mr-2" />}
            <FiMoon className="text-zinc-900 text-xl mr-1" />
            Dark
          </div>
        </MenuItem>
      </Menu>
    </div >
  );
}

export default BtnDarkMode;