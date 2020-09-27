import React, { useState } from 'react'
import DND from '../components/DND'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
let table2 = [{ id: 0, row: ['names', 'ages', 'emails'], type: 'column' }, { id: 2, row: ['ali', 23, '@bla bla'], type: 'row' }, { id: 2, row: ['alex', 26, '@ '], type: 'row' }, { id: 2, row: ['alex', 26, '# '], type: 'row' }]
const viewOptions = ['Defualt', 'Form', 'Chart']
function TableViews() {

      const [choose, setChoose] = useState('Defualt')
      const [anchorEl, setAnchorEl] = useState(null);
      const handleClose = (e) => {
            setAnchorEl(null);
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
                        <DND setAnchorEl2={setAnchorEl} setChoose={setChoose} View={'Views'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={viewOptions} />
                  </Menu>
                  {choose === 'Defualt' && <DND View={'TableH'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={table2} />}
                  {choose === 'Form' && <DND View={'Form'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={table2} />}
                  {choose === 'Chart' && <DND View={'Chart'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={table2} />}

            </div>
      )
}

export default TableViews
