import React from 'react'
let thelement = null
function handlKey(e, state, set, setAnchorEl, setShow) {
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
            if ((e) => e.key === "Alt") { setShow((pre) => !pre) }
            thelement = e.target
      }
}

export default handlKey
export { thelement }
