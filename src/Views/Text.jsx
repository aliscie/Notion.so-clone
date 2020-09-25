import React, { useState, useRef } from 'react'
import CheckBox from '../components/CheckBox'
import handlKey from '../Actions/handlKey'
import Pop from '../components/Pop'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Text({ dragable, state, set, e, isDragging, SetIsOver, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch }) {
      const [mentE, setMentE] = useState(null);
      const [show, setShow] = useState(false);
      const [pinterPosition, setPoin] = useState(false);
      const [isover, setIsover] = useState(false)
      const target = useRef(null);
      function handlId(e) {
            setMentE(e)
      }

      return (
            <div style={{ opacity: isDragging ? '0.2' : '1' }}
                  onMouseOver={() => setIsover(true)} onMouseLeave={() => setIsover(false)}
            >
                  <div style={{ display: 'inline', opacity: isover ? '1' : '0' }} {...dragable}>
                        <DragIndicatorIcon />
                  </div>
                  <CheckBox e={e} />
                  <div
                        id={e.id}
                        ref={target}
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                        onKeyUp={(e) => handlKey(e, state, set, setAnchorEl, setShow)}
                        onKeyDown={handlId}
                        style={{ ...e.style, ...elementsStyle, width: '100%', display: 'inline' }}
                        placeholder='type or hit command.'
                        onClick={e => setPoin({ X: e.clientX, Y: e.clientY })}

                  >{e.text}</div>
                  <Pop pinterPosition={pinterPosition} setShow={setShow} state={state} set={set} mentE={mentE} show={show} target={target} />
            </div >
      )
}

export default Text
