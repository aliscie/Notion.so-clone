
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Components from '../Actions/Components';

const grid = 8

function DND({ height, setAnchorEl2, setChoose, View, elements, boxStyle, elementsStyle, display, direction }) {

      const [state, set] = useState(elements)
      const [columns, setC] = useState(state)

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

                                                      >
                                                            <Components dragable={provided.dragHandleProps} setAnchorEl2={setAnchorEl2} setChoose={setChoose} View={View} index={index} isDragging={snapshot.isDragging} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
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
                                          height: height,
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
                                    table3.splice(i, 0, { id: i, row: intial, type: 'column' })

                              }
                        }
                        return table3
                  })

            }, [])


            return (
                  <div style={{ display: 'flex', marginLeft: '24px' }}>
                        {columns.map((e, index) => (
                              <div key={index}>
                                    {
                                          <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                                {(provided, snapshot) => (
                                                      <div
                                                            ref={provided.innerRef}

                                                      >
                                                            <Components provided={provided} View={View} index={index} isDragging={snapshot.isDragging} anchorEl={anchorEl} setAnchorEl={setAnchorEl} elementsStyle={elementsStyle} state={state} set={set} e={e} />
                                                      </div>
                                                )}
                                          </Draggable>
                                    }
                              </div>
                        ))}

                  </div >
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
            setC(pre => {
                  const [removed] = pre.splice(r.source.index, 1);
                  pre.splice(r.destination.index, 0, removed)
                  return pre
            })

            set(pre => {
                  //convert data to vertical
                  let table3 = []
                  for (let i = 0; i < pre[0].row.length; i++) {
                        let intial = []
                        pre.map(r => (
                              r.type !== 'column' && intial.push(r.row[i])
                        ))
                        table3.splice(i, 0, { id: i, row: intial, type: 'row' })
                  }
                  // reorder
                  const [removed2] = table3.splice(r.source.index, 1);
                  table3.splice(r.destination.index, 0, removed2);

                  //convert 2
                  let table2 = []
                  for (let i = 0; i < table3[0].row.length; i++) {
                        let intial = []
                        table3.map(r => intial.push(r.row[i]))
                        table2.splice(i, 0, { id: i, row: intial, type: 'row' })
                  }
                  pre = table2
                  return pre
            })
            //state don't convert?
            // console.log(state)
            // console.log(columns)

      }

      function reOrder(r) {
            set(pre => {
                  const [removed] = pre.splice(r.source.index, 1);
                  pre.splice(r.destination.index, 0, removed);
                  return pre
            })
            //this works very well.
            // console.log(state)
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

