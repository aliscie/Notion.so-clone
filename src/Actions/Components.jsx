import React, { useState } from 'react'
import Text from '../Views/Text'
import Table from '../Views/TableH'
import ViewOptions from '../components/ViewOptions'
import { Flipper, Flipped } from 'react-flip-toolkit'

function Components({ dragable, setOver, setAnchorEl2, setChoose, elements, View, isDragging, state, set, e, setAnchorEl, elementsStyle, anchorEl, Indexing }) {
      const [mouseIsOver, SetIsOver] = useState(false)
      const [searchValue, setSearch] = useState('')

      return (
            <div>
                  {View === 'Text' && <Text dragable={dragable} serOver={setOver} Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} mouseIsOver={mouseIsOver} state={state} set={set} />}
                  {View === 'TableH' && <Table dragable={dragable} set={set} state={state} Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} mouseIsOver={mouseIsOver} />}
                  {View === 'Views' && <ViewOptions
                        set={set} state={state}
                        setAnchorEl2={setAnchorEl2}
                        setChoose={setChoose}
                        Indexing={Indexing} setSearch={setSearch} setAnchorEl={setAnchorEl} anchorEl={anchorEl} searchValue={searchValue} elementsStyle={elementsStyle} e={e} isDragging={isDragging} SetIsOver={SetIsOver} mouseIsOver={mouseIsOver} />}

            </div>
      )
}

export default Components
