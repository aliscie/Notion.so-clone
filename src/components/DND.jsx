import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Keyboard from '../Actions/Keyboard';
const grid = 8

function DND({ View, elements, boxStyle, elementsStyle, display, direction }) {

      const [state, set] = useState(elements)
      const [anchorEl, setAnchorEl] = useState(null);

      function Drag() {

            return (
                  <div style={{ display: display }}>
                        {state.map((e, index) => (
                              <div key={index}>{
                                    e.type === 'column' && <Keyboard View={View} Indexing={index} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
                              }
                                    {
                                          e.type !== 'column' && <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                                {(provided, snapshot) => (
                                                      <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                      >
                                                            <div>
                                                                  <Keyboard View={View} Indexing={index} isDragging={snapshot.isDragging} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
                                                            </div>
                                                      </div>
                                                )}
                                          </Draggable>
                                    }
                              </div>
                        ))}
                  </div>
            )
      }
      function Drop() {
            return (
                  <Droppable droppableId='droppable' direction={direction} >
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
                                    {Drag(boxStyle, elementsStyle)}
                                    {provided.placeholder}
                              </div>
                        )
                        }
                  </Droppable >
            )
      }

      function reOrder(r) {
            const x = state
            const [removed] = x.splice(r.source.index, 1);
            x.splice(r.destination.index, 0, removed);
            setTimeout(() => {
                  set(x)
            }, 0)
      }

      return (
            <DragDropContext onDragEnd={reOrder}>
                  {Drop(state, boxStyle, elementsStyle)}
            </DragDropContext >
      )
}
export default DND