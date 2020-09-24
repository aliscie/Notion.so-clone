import React from 'react';
import DND from './components/DND'
import './css.css'

function App() {
      let elements = [{ id: 0, text: 'first', checkBox: true }, { id: 1, text: 'second', checkBox: false }, { id: 2, text: 'third', checkBox: null }]
      let table2 = [{ id: 0, row: ['names', 'ages', 'emails'], type: 'column' }, { id: 2, row: ['ali', 23, '@bla bla'], type: 'row' }, { id: 2, row: ['alex', 26, '@ '], type: 'row' }, { id: 2, row: ['alex', 26, '# '], type: 'row' }]


      return (
            <div>
                  <DND View={'Text'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{ background: 'white' }} elements={elements} />
                  <DND View={'TableH'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{}} elements={table2} />
            </div>

      )
}

export default App