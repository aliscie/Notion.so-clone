import React from 'react'

function Table({ e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {

      return (
            <div style={{ width: '130px' }}>
                  {e.row.map(cell => <div key={cell} style={{ border: '2px solid black', padding: '5px' }}>{cell}</div>)}
            </div>
      )
}

export default Table
