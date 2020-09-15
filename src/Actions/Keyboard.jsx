import React, { useState } from 'react'
import CheckBox from '../components/CheckBox'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Pop from '../components/Popover'

function Keyboard({ isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl }) {
      const [mouseIsOver, SetIsOver] = useState(false)
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
                              { id: state.length + 1, text: "", style: { color: 'gray' } },
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
            }

      }

      return (
            <div style={{ opacity: isDragging ? '0.2' : '1' }} onMouseOver={() => SetIsOver(true)} onMouseLeave={() => SetIsOver(false)}>
                  <DragIndicatorIcon style={{ opacity: mouseIsOver ? '1' : '0' }} />
                  <CheckBox e={e} />
                  <div
                        id={e.id}
                        contentEditable='true'
                        onKeyUp={handlKey}
                        style={{ ...e.style, ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
                  //(e.text.lenght<0)&&(inntertext =='att text or hit / to add elment.')+(stle={{color:'gray'}})
                  >{e.text}</div>
                  <Pop anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </div>
      )
}

export default Keyboard
