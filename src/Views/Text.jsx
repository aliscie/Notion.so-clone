import React, { useState, useRef } from 'react'
import CheckBox from '../components/CheckBox'
import handlKey from '../Actions/handlKey'
import Pop from '../components/Pop'
function Text({ state, set, e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch }) {
      const [mentE, setMentE] = useState(null)
      const [show, setShow] = useState(false);
      const target = useRef(null);

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
                        onKeyUp={(e) => handlKey(e, state, set, setAnchorEl, setShow)}
                        onKeyDown={handlId}
                        style={{ ...e.style, ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
                        placeholder='type or hit command.'
                        ref={target}

                  >{e.text}</div>
                  <Pop setShow={setShow} state={state} set={set} mentE={mentE} show={show} target={target} />
                  <input hidden onChange={e => setSearch(e.target.value)} />
            </div>
      )
}

export default Text
