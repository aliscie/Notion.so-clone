import React from 'react';
import DND from './components/DND'
import './css.css'
function App() {
      let elements = [{ id: 0, text: 'first', checkBox: true }, { id: 1, text: 'second', checkBox: false }, { id: 2, text: 'third', checkBox: null }]
      let table = [{ id: 0, row: ['Names', 'Ali', "Alex", "sam"] }, { id: 2, row: ['ages', 23, 22, 26] }, { id: 3, row: ['emails', 'alihushamsci@', 'alexsci@', 'samsci@'] }]
      let table2 = [{ id: 0, row: ['names', 'ages'], type: 'column' }, { id: 2, row: ['ali', 23] }, { id: 2, row: ['alex', 26] }]
      return (
            <div>
                  <DND View={'Text'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{ background: 'white' }} elements={elements} />
                  <DND View={'TableH'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{ background: 'white' }} elements={table2} />
            </div>

      )
}

export default App