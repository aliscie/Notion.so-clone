import React from 'react';
import DND from './components/DND'
import TableViews from './components/TableViews'
import './css.css'

function App() {
      let elements = [{ id: 0, text: 'first', checkBox: true, image: null }, { id: 1, text: 'second', checkBox: false, image: null }, { id: 2, text: 'third', checkBox: null, image: null }]

      return (
            <div>
                  <DND View={'Text'} display={'block'} direction={"vertical"} boxStyle={{ background: 'white' }} elementsStyle={{ background: 'white' }} elements={elements} />
                  <TableViews />
            </div>

      )
}

export default App