import React, { useState } from 'react'
import { ListNested } from 'react-bootstrap-icons';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Table({ dragable, state, set, e }) {
      const [isover, setIsover] = useState(false)

      function hanldKeyup(event) {
            const index = state.findIndex((item) => `${item.row}` == event.target.id);

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

            if (event.keyCode !== 13) {
                  e.row[event.target.className] = event.target.innerText
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
                              <div suppressContentEditableWarning={true} contentEditable style={{ display: 'inline' }}>{cell}</div>
                        </div>
                  ))}

                  <div onMouseOver={() => setIsover(true)} onMouseLeave={() => setIsover(false)}>

                        {e.type !== 'column' && <div
                              style={{ display: 'inline', opacity: isover ? '1' : '0' }}
                              {...dragable}>
                              <DragIndicatorIcon />
                        </div>}
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


            </div>
      )
}

export default Table
