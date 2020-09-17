import React, { useState, useEffect } from 'react'

function Table({ e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {
      const [elem, setElem] = useState([])
      const columnsL = e.row.length
      return (
            <div style={{}}>
                  {e.row.map(cell => <div style={{ border: '2px solid black', padding: '5px', display: 'inline-block', width: '130px' }}>{cell}</div>)}
            </div>
      )
}

export default Table
