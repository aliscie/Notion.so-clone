import React from 'react';
import DND from './components/DND'

function App() {
      let elements = [{ id: 0, text: 'first' }, { id: 1, text: 'second' }, { id: 2, text: 'third' }]
      return (
            <div>
                  <DND boxStyle={{ background: 'black' }} elementsStyle={{ background: 'white' }} elements={elements} />
            </div>

      )
}

export default App