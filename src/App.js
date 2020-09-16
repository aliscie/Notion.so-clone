import React from 'react';
import DND from './components/DND'
import './css.css'
function App() {
      let elements = [{ id: 0, text: 'first', checkBox: true }, { id: 1, text: 'second', checkBox: false }, { id: 2, text: 'third', checkBox: null }]
      return (
            <div>
                  <DND boxStyle={{ background: 'white' }} elementsStyle={{ background: 'white' }} elements={elements} />
            </div>

      )
}

export default App