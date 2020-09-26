import { Checkbox } from '@material-ui/core'
import React from 'react'

function CheckBox({ e }) {
      return (
            <div style={{ display: 'inline' }}>
                  {e.checkBox === true && <Checkbox onChange={event => e.checkBox = event.target.checked} defaultChecked color="primary" />}
                  {e.checkBox === false && <Checkbox onChange={event => e.checkBox = event.target.checked} color="primary" />}
                  {e.checkBox === null && null}
            </div>
      )
}

export default CheckBox
