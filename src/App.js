import React from 'react';
import DND from './components/DND'

function App() {
      let elements = ['first', 'secon', 'thid ']
      return (
            <div>
                  <DND boxStyle={{ background: 'black' }} elementsStyle={{ background: 'white' }} elements={elements} />
            </div>

      )
}

export default App