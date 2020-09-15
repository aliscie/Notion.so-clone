import { Checkbox } from '@material-ui/core'
import React from 'react'

function CheckBox({ e }) {
      return (
            <div style={{ display: 'inline' }}>
                  {e.checkBox === true && <Checkbox defaultChecked color="primary" />}
                  {e.checkBox === false && <Checkbox color="primary" />}
                  {e.checkBox === null && null}
            </div>
      )
}

export default CheckBox
