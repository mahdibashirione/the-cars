import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiCheck, FiChevronDown, FiChevronsDown, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme, useThemeDispatch } from '../context/theme/ThemeProvider';

const BtnDarkMode = () => {

  const themeState = useTheme()
  const themeDispatch = useThemeDispatch()

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
          themeDispatch({ type: "Light" })
        }}>
          <div className='flex items-center text-sm'>
            {themeState === "light" && <FiCheck className="text-green-500 text-xl" />}
            <FiSun className="text-zinc-900 text-xl" />
            Light
          </div>
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          themeDispatch({ type: "Dark" })
        }}>
          <div className='flex items-center text-sm'>
            {themeState === "dark" && <FiCheck className="text-green-500 text-xl" />}
            <FiMoon className="text-zinc-900 text-xl" />
            Dark
          </div>
        </MenuItem>
      </Menu>
    </div >
  );
}

export default BtnDarkMode;