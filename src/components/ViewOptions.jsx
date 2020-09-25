import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
function ViewOptions({ e, Views, setChoose, setAnchorEl2, anchorEl }) {

      const handleClose = (e) => {
            setAnchorEl2(null);
            setChoose(e.target.innerText);
      };

      return (
            <div>
                  <MenuItem onClick={handleClose}>{e}</MenuItem>
            </div>
      )
}

export default ViewOptions
