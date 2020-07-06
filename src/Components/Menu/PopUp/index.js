import React, { useState } from "react"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const PopUp = ({ component, children }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    < div >
      <div onClick={handleClick}>{component}</div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

        {children.map((item) => {
          return <MenuItem onClick={item.onClick}>{item.item}</MenuItem>
        })}
      </Menu>
    </div >

  )
}

export default PopUp
