import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Checkbox from '@material-ui/core/Checkbox';
import Pop from './Popover'

const grid = 8

function DND({ elements, boxStyle, elementsStyle }) {
      const [state, set] = useState(elements)
      const [anchorEl, setAnchorEl] = useState(null);

      function Drag() {

            function handlKey(e) {
                  // let x = state
                  // const foundE = state.find(({ id }) => `${id}` === e.target.id)
                  // const updatedE = { id: parseInt(e.target.id), text: e.target.innerText }
                  // Object.assign(foundE, updatedE)
                  // console.log(x)
                  // set(x)
                  // console.log(state)

                  if (e.keyCode == 13) {

                        const index = state.findIndex((item) => `${item.id}` == e.target.id);
                        console.log(index, e.target.id)

                        set((pre) => {
                              return [
                                    ...pre.slice(0, index + 1),
                                    { id: state.length + 1, text: "xxx" },
                                    ...pre.slice(index + 1, state.length)
                              ];
                        });
                        setTimeout(() => {
                              document.getElementById(state.length + 1).focus();
                        }, 0);
                        console.log(state)
                  }

                  if (e.target.innerText.includes('/')) {
                        setAnchorEl(e.currentTarget)
                  }
            }

            return (
                  <div>
                        {state.map((e, index) => (
                              <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                    {(provided, snapshot) => (
                                          <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                          // style={{
                                          //       padding: grid,
                                          //       overflow: 'auto',
                                          //       ...provided.draggableProps.style,

                                          // }}
                                          >
                                                <div
                                                >
                                                      {e.checkBox === true && <Checkbox defaultChecked color="primary" />}
                                                      {e.checkBox === false && <Checkbox color="primary" />}
                                                      {e.checkBox === null && null}
                                                      <div
                                                            id={e.id}
                                                            contentEditable='true'
                                                            onKeyUp={handlKey}
                                                            style={{ ...elementsStyle, width: '100%', outline: 'none', display: 'inline' }}
                                                      >{e.text}</div>
                                                      <Pop anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                                                </div>
                                          </div>
                                    )}
                              </Draggable>
                        ))}
                  </div>
            )
      }
      function Drop() {
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
                                    {Drag(boxStyle, elementsStyle)}
                                    {provided.placeholder}
                              </div>
                        )}
                  </Droppable>
            )
      }

      function reOrder(r) {
            const [removed] = elements.splice(r.source.index, 1);
            elements.splice(r.destination.index, 0, removed);
      }

      return (
            <DragDropContext onDragEnd={reOrder}>
                  {Drop(state, boxStyle, elementsStyle)}
            </DragDropContext >
      )
}
export default DND