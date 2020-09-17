import React, { useState, useEffect } from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Text from '../Views/Text'
import Table from '../Views/Table'
import TableH from '../Views/TableH'
function Components({ elements, View, isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl, Indexing }) {
      const [mouseIsOver, SetIsOver] = useState(false)
      const [searchValue, setSearch] = useState('')


      return (
            <div>
                  {View === 'Text' && <Text Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} state={state} set={set} />}
                  {View === 'Table' && <Table Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
                  {View === 'TableH' && <TableH set={set} Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} DragIndicatorIcon={DragIndicatorIcon} mouseIsOver={mouseIsOver} />}
            </div>
      )
}

export default Components
