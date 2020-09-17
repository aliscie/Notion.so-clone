import React from 'react'
import CheckBox from '../components/CheckBox'
import Pop from '../components/Popover'

function Text({ e, isDragging, SetIsOver, DragIndicatorIcon, mouseIsOver, handlKey, elementsStyle, searchValue, anchorEl, setAnchorEl, setSearch }) {
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

export default Text
