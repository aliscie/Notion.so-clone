import React, { useState, useEffect } from 'react'
import { ListNested } from 'react-bootstrap-icons';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Table({ provided, index, dragable, state, set, e }) {
      const [isover, setIsover] = useState(false)

      function hanldKeyup(event) {
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
                  // console.log(event.target.value.includes('=') && true)
            }

            if (event.keyCode !== 13) {
                  e.row[event.target.className] = event.target.innerText
            }

      }

      function hanldKeyupColumn(event) {
            //problem: after reunning this function table don't render automattcy
            if (event.keyCode == 13) {
                  event.target.innerText = event.target.innerText.split('\n').join('')
                  set((pre) => {
                        pre.map(row => row.row.push('new'))
                        return pre
                  });
            }
      }

      return (
            <table>
                  {e.type === 'column' && e.row.map(cell => (
                        <thead {...provided.dragHandleProps} {...provided.draggableProps}>
                              <div key={cell}>
                                    <ListNested />
                                    <th onKeyUp={hanldKeyupColumn} suppressContentEditableWarning={true} contentEditable >{cell}</th>
                              </div>
                        </thead>
                  ))}

                  <div onMouseOver={() => setIsover(true)} onMouseLeave={() => setIsover(false)}>

                        {e.type !== 'column' && <div
                              style={{ display: 'inline', opacity: isover ? '1' : '0' }}
                              {...dragable}>
                              <DragIndicatorIcon />
                        </div>}

                        {e.type !== 'column' && e.row.map((cell, Index) => (
                              <tbody
                                    key={cell}
                              >
                                    <th
                                          id={e.row}
                                          className={index}
                                          onKeyUp={hanldKeyup}
                                          suppressContentEditableWarning={true}
                                          contentEditable
                                    >
                                          {cell}
                                    </th>
                              </tbody>
                        ))}
                  </div>


            </table>
      )
}

export default Table
