import React, { useState, useEffect } from 'react'

function Table({ e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {
      const [elem, setElem] = useState([])
      const columnsL = e.row.length

      return (
            <div style={{ width: '130px' }}>
                  {e.row.map(cell => <div style={{ border: '2px solid black', padding: '5px' }}>{cell}</div>)}
            </div>
      )
}

export default Table
