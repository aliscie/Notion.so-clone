import React, { useState, useEffect } from 'react'

function Form({ dragable, state, set, e }) {


      function handlKeyUp(event) {
            const index = state[0].row.findIndex((item) => `${item}` == event.target.placeholder);
            set(pre => {
                  //must update the alues base on the id.
                  pre[state.length - 1].row[index] = event.target.value
                  return pre
            })

      }
      return (
            <div style={{ margin: '20px' }}>
                  {e.type === 'column' && <div>
                        <input id={e.row} onKeyUp={handlKeyUp} placeholder={e.row} />
                  </div>}
            </div>
      )
}

export default Form
