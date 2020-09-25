import React, { useRef } from 'react'
import { ListNested } from 'react-bootstrap-icons';

function Table({ state, set, e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch, Indexing }) {
      const ref = useRef()
      function hanldKeyup(event) {
            const index = state.findIndex((item) => `${item.row}` == event.target.id);
            const subIndex = state[index].row.findIndex((item) => item == event.target.className);

            if (event.keyCode == 13) {
                  event.preventDefault()
                  event.target.innerText = event.target.innerText.split('\n').join('')
                  set((pre) => {
                        return [
                              ...pre.slice(0, index + 1),
                              { id: state.length + 1, row: ['name', 100, '@bla bla'], type: 'row' },
                              ...pre.slice(index + 1, state.length)
                        ];
                  });
            }

            if (event.keyCode != 13) {
                  var x = state
                  x[index].row[subIndex] = event.target.innerText
                  set(x)
            }

      }



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
                              <div ref={ref} id={e.row} className={cell} onKeyUp={hanldKeyup} suppressContentEditableWarning={true} contentEditable >{cell}</div>
                        </div>
                  ))}


            </div>
      )
}

export default Table
