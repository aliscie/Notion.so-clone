let thelement
let position
function handlKey(event, e, state, set, setAnchorEl, setShow, index) {
      set(pre => {
            pre[index].text = event.target.innerText
            return pre
      })


      if (event.target.innerText.length == 0) {
            if (event.keyCode == 8) {
                  set((pre) => {
                        return [
                              ...pre.slice(0, index),
                              ...pre.slice(index + 1, state.length)
                        ];
                  })
            }

      }
      if (event.keyCode == 13) {
            event.target.innerText = event.target.innerText.split('\n').join('')
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

      if (event.keyCode == 18) {
            thelement = event.target
            if ((e) => event.key === "Alt") { setShow((pre) => !pre) }
      }
}

export default handlKey
export { thelement, position }
