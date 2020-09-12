import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


function App() {
      const elements = ['first', 'secon', 'thid ']
      const grid = 8
      return (
            <DragDropContext onDragEnd={(r) => console.log(r)}>
                  <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                              <div
                                    ref={provided.innerRef}
                                    // {...provided.droppableProps}
                                    style={{
                                          background: provided.isDraggingOver ? 'lightblue' : 'grey',
                                          padding: grid,
                                          border: '5px solid pink',
                                          width: '100%',
                                          height: '1000px',
                                          overflow: 'auto'
                                    }}
                              >
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
                                                                  border: '5px solid pink',
                                                                  width: '100%',
                                                                  height: '1000px',
                                                                  overflow: 'auto',
                                                                  ...provided.draggableProps.style,
                                                                  width: '100px',
                                                                  height: '100px'
                                                            }}
                                                      >{e}</div>
                                                )}
                                          </Draggable>
                                    ))}
                              </div>
                        )}
                  </Droppable>
            </DragDropContext >
      )
}

export default App
