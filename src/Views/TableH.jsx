import React, { useRef } from 'react'
import { ListNested } from 'react-bootstrap-icons';

function Table({ state, set, e }) {

      function hanldKeyup(event) {
            const index = state.findIndex((item) => `${item.row}` == event.target.id);

            if (event.keyCode === 13) {
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

            if (event.keyCode !== 13) {

                  e.row[event.target.className] = event.target.innerText
                  console.log(state)
                  // console.log(state[index].row[subIndex])
                  // console.log(e.row[subIndex])
                  // console.log(event.target.innerText)
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

                  {e.type !== 'column' && e.row.map((cell, index) => (
                        <div
                              key={cell}
                              style={{ padding: '5px', display: 'inline-block', width: '130px', border: '0.1px solid rgb(223, 222, 222)', margin: '-0.7px' }}

                        >
                              <div id={e.row} className={index} onKeyUp={hanldKeyup} suppressContentEditableWarning={true} contentEditable >
                                    {cell}
                              </div>
                        </div>
                  ))}


            </div>
      )
}

export default Table
