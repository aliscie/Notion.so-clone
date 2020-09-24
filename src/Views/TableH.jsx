import React from 'react'
import { ListNested } from 'react-bootstrap-icons';

function Table({ set, e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {

      return (
            <div
            >
                  {e.type === 'column' && e.row.map(cell => (
                        <div
                              key={cell}
                              style={{ color: '#AFAEAC', padding: '5px', display: 'inline-block', width: '130px', border: '0.1px solid rgb(223, 222, 222)', margin: '-0.7px' }}
                        >
                              <ListNested />
                              {' '}
                              <div suppressContentEditableWarning={true} contentEditable style={{ display: 'inline' }}>{cell}</div>
                        </div>
                  ))}

                  {e.type !== 'column' && e.row.map(cell => (
                        <div
                              key={cell}
                              style={{ padding: '5px', display: 'inline-block', width: '130px', border: '0.1px solid rgb(223, 222, 222)', margin: '-0.7px' }}
                        >
                              <div suppressContentEditableWarning={true} contentEditable >{cell}</div>
                        </div>
                  ))}


            </div>
      )
}

export default Table
