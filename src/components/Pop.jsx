import React from 'react'
import Overlay from "react-bootstrap/Overlay";
import Selection from '../components/Selection'

function Pop({ pinterPosition, setShow, target, show, state, set, mentE }) {

      return (
            <Overlay
                  // ref={target}
                  target={target.current}
                  show={show}
                  position
            >
                  {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                              {...props}
                              style={{
                                    backgroundColor: "rgba(140, 140, 140, 0.85)",
                                    color: "black",
                                    borderRadius: 3,
                                    // ...props.style,
                                    top: `${pinterPosition.Y}px`,
                                    left: `${pinterPosition.X}px`,
                                    position: 'absolute'
                              }}
                        >
                              <div  >
                                    <Selection setShow={setShow} mentE={mentE} state={state} set={set} />
                              </div>
                        </div>
                  )}
            </Overlay>
      )
}

export default Pop
