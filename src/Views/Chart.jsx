import React from 'react'

function Chart({ dragable, state, set, e }) {
      console.log(e.row[0])
      return (
            <div>
                  {e.type !== 'column' && <div
                        style={{ border: '1px solid #E8E8E7', borderRadius: '5px', boxShadow: '3px 3px 3px gray', backgroundColor: 'white', width: '200px', margin: '3px' }}
                        {...dragable}>
                        <h4 style={{ borderBottom: '2px solid #E8E8E7' }}>{e.row[0]}</h4>
                        <div>{e.row[1]}</div>
                        <div>{e.row[2]}</div>
                  </div>}
            </div>
      )
}

export default Chart
