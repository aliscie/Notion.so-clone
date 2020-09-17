import React, { useState } from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Text from '../Views/Text'
import Table from '../Views/Table'
import TableH from '../Views/TableH'
function Keyboard({ elements, View, isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl, Indexing }) {
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
            <div>
                  {View === 'Text' && <Text setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} handlKey={handlKey} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
                  {View === 'Table' && <Table Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} handlKey={handlKey} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
                  {View === 'TableH' && <TableH set={set} Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} handlKey={handlKey} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
            </div>
      )
}

export default Keyboard
