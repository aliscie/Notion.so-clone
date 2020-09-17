import React from 'react'

function Table({ set, e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {

      return (
            <div style={{}}>
                  {e.type !== 'column' && e.row.map(cell => <div key={cell} style={{ border: '2px solid black', padding: '5px', display: 'inline-block', width: '130px' }}>{cell}</div>)}
                  {e.type === 'column' && e.row.map(cell => <div key={cell} style={{ border: '2px solid black', padding: '5px', display: 'inline-block', width: '130px', background: 'gray' }}>{cell}</div>)}
            </div>
      )
}

export default Table
