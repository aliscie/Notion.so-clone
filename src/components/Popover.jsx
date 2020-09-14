import React, { useState, useEffect } from 'react'
import { Popover } from '@material-ui/core';


function Pop({ anchorEl, setAnchorEl }) {
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
                  }}
                  transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                  }}
            >
                  yyyyyyy
            </Popover>
      )
}

export default Pop
