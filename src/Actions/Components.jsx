import React, { useState } from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Text from '../Views/Text'
import TableH from '../Views/TableH'
import ViewOptions from '../components/ViewOptions'
function Components({ setAnchorEl2, setChoose, elements, View, isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl, Indexing }) {
      const [mouseIsOver, SetIsOver] = useState(false)
      const [searchValue, setSearch] = useState('')

      return (
            <div>
                  {View === 'Text' && <Text Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} state={state} set={set} />}
                  {View === 'TableH' && <TableH set={set} state={state} Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
                  {View === 'Views' && <ViewOptions
                        set={set} state={state}
                        setAnchorEl2={setAnchorEl2}
                        setChoose={setChoose}
                        Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}

            </div>
      )
}

export default Components
