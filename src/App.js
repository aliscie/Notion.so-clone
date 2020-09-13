import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


function App() {
      const elements = ['first', 'secon', 'thid ']

      const grid = 8
      function Drag(elements, boxStyle, elementsStyle) {
            return (
                  <div>
                        {elements.map((e, index) => (
                              <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                    {(provided, snapshot) => (
                                          <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                      background: provided.isDraggingOver ? 'lightgreen' : 'green',
                                                      padding: grid,
                                                      overflow: 'auto',
                                                      ...provided.draggableProps.style,
                                                      ...elementsStyle
                                                }}
                                          >{e}</div>
                                    )}
                              </Draggable>
                        ))}
                  </div>
            )
      }
      function Drop(elements, boxStyle, elementsStyle) {
            return (
                  <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                              <div
                                    ref={provided.innerRef}
                                    style={{
                                          padding: grid,
                                          overflow: 'auto',
                                          height: '300px',
                                          ...boxStyle
                                    }}
                              >
                                    {Drag(elements, boxStyle, elementsStyle)}
                              </div>
                        )}
                  </Droppable>
            )
      }
      function DND({ elements, boxStyle, elementsStyle }) {
            return (
                  <DragDropContext onDragEnd={(r) => console.log(r)}>
                        {Drop(elements, boxStyle, elementsStyle)}
                  </DragDropContext >
            )
      }

      return (
            <div>
                  <DND boxStyle={{ background: 'black' }} elementsStyle={{ background: 'white' }} elements={elements} />
            </div>

      )
}

export default App