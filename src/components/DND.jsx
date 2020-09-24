
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Components from '../Actions/Components';

const grid = 8

function DND({ View, elements, boxStyle, elementsStyle, display, direction }) {

      const [state, set] = useState(elements)
      const [columns, setC] = useState(elements)

      const [anchorEl, setAnchorEl] = useState(null);

      function Drag() {

            return (
                  <div style={{ display: display }}>
                        {state.map((e, index) => (
                              <div key={index}>
                                    {
                                          e.type !== 'column' && <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                                {(provided, snapshot) => (
                                                      <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                      >
                                                            <div>
                                                                  <Components View={View} Indexing={index} isDragging={snapshot.isDragging} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
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
                                          paddingTop: '0',
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




      function DragH() {
            useEffect(() => {
                  setC(pre => {
                        let table3 = []
                        if (pre[0].row) {
                              for (let i = 0; i < pre[0].row.length; i++) {
                                    let intial = []
                                    intial.push(pre[0].row[i])
                                    table3.splice(i, 0, { id: i, row: intial })

                              }
                        }
                        return table3
                  })

            }, [])


            return (
                  <div style={{ display: 'flex' }}>
                        {columns.map((e, index) => (
                              <div key={index}>
                                    {
                                          <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                                {(provided, snapshot) => (
                                                      <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                      >
                                                            <div>
                                                                  <Components View={View} Indexing={index} isDragging={snapshot.isDragging} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
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
      function DropH() {
            return (
                  <Droppable droppableId='droppable' direction='horizontal' >
                        {(provided, snapshot) => (
                              <div
                                    ref={provided.innerRef}
                                    style={{
                                          padding: grid,
                                          overflow: 'auto',
                                          paddingBottom: '0',
                                          ...boxStyle
                                    }}
                              >
                                    {DragH(boxStyle, elementsStyle)}
                                    {provided.placeholder}
                              </div>
                        )
                        }
                  </Droppable >
            )
      }

      function reOrderH(r) {
            const x = columns
            const [removed] = x.splice(r.source.index, 1);
            x.splice(r.destination.index, 0, removed);
            setTimeout(() => {
                  setC(x)
            }, 0)
            console.log(r.source.index, r.destination.index)
            // convert 1
            const y = state
            let table3 = []
            for (let i = 0; i < state[0].row.length; i++) {
                  let intial = []
                  state.map(r => intial.push(r.row[i]))
                  table3.splice(i, 0, { id: i, row: intial })
            }
            console.log(table3)
            // convert 2
            let table2 = []
            for (let i = 0; i < table3[0].row.length; i++) {
                  let intial = []
                  table3.map(r => intial.push(r.row[i]))
                  table2.splice(i, 0, { id: i, row: intial })
            }
            console.log(table2)


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
            <div>
                  <DragDropContext onDragEnd={reOrderH}>
                        {DropH()}
                  </DragDropContext >

                  <DragDropContext onDragEnd={reOrder}>
                        {Drop(state, boxStyle, elementsStyle)}
                  </DragDropContext >
            </div>
      )
}
export default DND

