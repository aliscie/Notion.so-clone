import React from 'react'

function Form({ dragable, state, set, e }) {

      function handlKeyUp(event) {
            // const index = state.findIndex((item) => `${item.row}` == event.target.id);
            // console.log(event.target.id)
            // state.findIndex((item) => console.log(item.row));

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
