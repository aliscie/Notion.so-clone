import React, { useState } from 'react';
import { InputBase } from "@material-ui/core";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
// import update from 'react-addons-update';
import update from 'immutability-helper'

const grid = 8
function Drag(es, boxStyle, elementsStyle) {
      let elements = es

      function handleKeyDown(e) {
            const foundE = elements.find(({ id }) => `${id}` === e.target.id)
            const updatedE = { id: parseInt(e.target.id), text: e.target.innerText }
            Object.assign(foundE, updatedE)
            // console.log(elements)

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
                                          <div
                                                id={e.id}
                                                style={{ outline: 'none' }}
                                                contentEditable='true'
                                                onKeyDown={handleKeyDown}
                                          >{e.text}</div>
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