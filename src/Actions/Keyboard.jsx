import React from 'react'

function Keyboard({ state, set, e, setAnchorEl, elementsStyle }) {
      function handlKey(e) {
            // e.preventDefault()
            e.target.innerText = e.target.innerText.split('\n').join('')
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
                  set((pre) => {
                        return [
                              ...pre.slice(0, index + 1),
                              { id: state.length + 1, text: "xxx" },
                              ...pre.slice(index + 1, state.length)
                        ];
                  });
                  setTimeout(() => {
                        document.getElementById(state.length + 1).focus();
                  }, 0);
                  // console.log(state)
            }

            if (e.target.innerText.includes('/')) {
                  setAnchorEl(e.currentTarget)
            }
      }
      return (
            <div
                  id={e.id}
                  contentEditable='true'
                  onKeyUp={handlKey}
                  style={{ ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
            >{e.text}</div>
      )
}

export default Keyboard
