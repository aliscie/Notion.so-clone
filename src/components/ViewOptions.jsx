import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function ViewOptions({ dragable, e, Views, setChoose, setAnchorEl2, anchorEl }) {
      const [isover, setIsover] = useState(false)


      const handleClose = (e) => {
            setAnchorEl2(null);
            setChoose(e.target.innerText);
      };

      return (
            <div onMouseOver={() => setIsover(true)} onMouseLeave={() => setIsover(false)} style={{ display: 'flex' }}>
                  <div style={{ display: 'inline', opacity: isover ? '1' : '0' }} {...dragable}>
                        <DragIndicatorIcon />
                  </div>
                  <MenuItem onClick={handleClose}>{e}</MenuItem>
            </div>
      )
}

export default ViewOptions
