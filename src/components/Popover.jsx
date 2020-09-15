import React from 'react'
import { Popover } from '@material-ui/core';
import Selection from './Selection'
function Pop({ searchValue, e, anchorEl, setAnchorEl }) {
      const open = Boolean(anchorEl);
      const handleClose = () => {
            setAnchorEl(null);
      };
      return (
            <Popover
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                  }
                  }
                  transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                  }}
            >
                  <Selection />

            </Popover >
      )
}

export default Pop
