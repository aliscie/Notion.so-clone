import React, { useState } from 'react'
import CheckBox from '../components/CheckBox'
import Pop from '../components/Popover'
import handlKey from '../Actions/handlKey'

function Text({ state, set, e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch }) {
      const [mentE, setMentE] = useState(null)
      function handlId(e) {
            setMentE(e)
      }

      return (
            <div style={{ opacity: isDragging ? '0.2' : '1' }} onMouseOver={() => SetIsOver(true)} onMouseLeave={() => SetIsOver(false)}>
                  <DragIndicatorIcon style={{ opacity: mouseIsOver ? '1' : '0' }} />
                  <CheckBox e={e} />
                  <div
                        id={e.id}
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                        onKeyUp={(e) => handlKey(e, state, set, setAnchorEl)}
                        onKeyDown={handlId}
                        style={{ ...e.style, ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
                        placeholder='type or hit command.'

                  >{e.text}</div>
                  <Pop mentE={mentE} element={e} state={state} set={set} searchValue={searchValue} e={e} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                  <input hidden onChange={e => setSearch(e.target.value)} />
            </div>
      )
}

export default Text
