import React, { useState } from 'react'
import CheckBox from '../components/CheckBox'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Pop from '../components/Popover'

function Keyboard({ isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl }) {
      const [mouseIsOver, SetIsOver] = useState(false)
      const [searchValue, setSearch] = useState('')
      function handlKey(e) {

            const index = state.findIndex((item) => `${item.id}` == e.target.id);

            // let x = state
            // const foundE = state.find(({ id }) => `${id}` === e.target.id)
            // const updatedE = { id: parseInt(e.target.id), text: e.target.innerText }
            // Object.assign(foundE, updatedE)
            // console.log(x)
            // set(x)
            // console.log(state)
            if (e.target.innerText.length == 0) {
                  if (e.keyCode == 8) {
                        set((pre) => {
                              return [
                                    ...pre.slice(0, index),
                                    ...pre.slice(index + 1, state.length)
                              ];
                        })
                  }

            }
            if (e.keyCode == 13) {
                  e.target.innerText = e.target.innerText.split('\n').join('')
                  set((pre) => {
                        return [
                              ...pre.slice(0, index + 1),
                              { id: state.length + 1, text: null, style: { color: 'black' }, checkBox: (state[index].checkBox !== null) ? false : null },
                              ...pre.slice(index + 1, state.length)
                        ];
                  });

                  setTimeout(() => {
                        // console.log(document.getElementById(state.length + 1))
                        document.getElementById(state.length + 1).focus();
                  }, 0);
            }

            if (e.keyCode == 18) {
                  // e.target.innerText = e.target.innerText.split('\n').join('')
                  setAnchorEl(e.currentTarget)
                  // console.log(document.getElementById('searchValue').focus())
            }

      }

      return (
            <div style={{ opacity: isDragging ? '0.2' : '1' }} onMouseOver={() => SetIsOver(true)} onMouseLeave={() => SetIsOver(false)}>
                  <DragIndicatorIcon style={{ opacity: mouseIsOver ? '1' : '0' }} />
                  <CheckBox e={e} />
                  <div
                        placeholder='placeholder'
                        id={e.id}
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                        onKeyUp={handlKey}
                        style={{ ...e.style, ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
                        placeholder='type or hit command.'
                  >{e.text}</div>
                  <Pop searchValue={searchValue} e={e} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                  <input hidden onChange={e => setSearch(e.target.value)} />
            </div>
      )
}

export default Keyboard
