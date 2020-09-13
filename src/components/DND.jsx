import React from 'react';
import { InputBase } from "@material-ui/core";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const grid = 8
function Drag(elements, boxStyle, elementsStyle) {
      function handleChange(e) {
            console.log(e)
      }
      function handleKeyDown(e) {
            console.log(elements.findIndex((item) => item === e.target.value))
            console.log(e.key)
      }
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
                                    >

                                          <InputBase
                                                fullWidth
                                                value={e}
                                                // onChange={handleChange}
                                                onKeyDown={handleKeyDown}
                                          // onFocus={(e) => console.log(e.target.value)}
                                          />
                                    </div>
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
                              {provided.placeholder}
                        </div>
                  )}
            </Droppable>
      )
}
function DND({ elements, boxStyle, elementsStyle }) {

      function reOrder(r) {
            const [removed] = elements.splice(r.source.index, 1);
            elements.splice(r.destination.index, 0, removed);
      }

      return (
            <DragDropContext onDragEnd={reOrder}>
                  {Drop(elements, boxStyle, elementsStyle)}
            </DragDropContext >
      )
}
export default DND