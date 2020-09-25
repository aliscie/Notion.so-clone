import React, { useState } from 'react'
import DND from '../components/DND'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

let table2 = [{ id: 0, row: ['names', 'ages', 'emails'], type: 'column' }, { id: 2, row: ['ali', 23, '@bla bla'], type: 'row' }, { id: 2, row: ['alex', 26, '@ '], type: 'row' }, { id: 2, row: ['alex', 26, '# '], type: 'row' }]
function TableViews() {
      const [anchorEl, setAnchorEl] = useState(null);
      const [choose, setChoose] = useState('View')


      const handleClose = (e) => {
            setAnchorEl(null);
            setChoose(e.target.innerText)
      };
      return (
            <div>
                  <Button style={{ outline: 'none' }} onClick={e => setAnchorEl(e.currentTarget)}>
                        {choose}</Button>
                  <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                  >
                        <MenuItem onClick={handleClose}>Defualt</MenuItem>
                        <MenuItem onClick={handleClose}>Form</MenuItem>
                        <MenuItem onClick={handleClose}>Chart</MenuItem>
                  </Menu>

                  <DND View={'TableH'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={table2} />
            </div>
      )
}

export default TableViews
