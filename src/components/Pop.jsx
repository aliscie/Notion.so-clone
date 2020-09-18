import React from 'react'
import Overlay from "react-bootstrap/Overlay";
import Selection from '../components/Selection'

function Pop({ setShow, target, show, state, set, mentE }) {
      return (
            <Overlay
                  // onExit={() => setShow(false)}
                  ref={target}
                  target={target.current}
                  show={show}
                  placement="right-start"
            >
                  {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                              {...props}
                              style={{
                                    backgroundColor: "rgba(140, 140, 140, 0.85)",
                                    color: "black",
                                    borderRadius: 3,
                                    ...props.style
                              }}
                        >
                              <div onMouseLeave={() => setShow(false)} >
                                    <Selection setShow={setShow} mentE={mentE} state={state} set={set} />
                              </div>
                        </div>
                  )}
            </Overlay>
      )
}

export default Pop
