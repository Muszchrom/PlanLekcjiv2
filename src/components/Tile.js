import { useState, useEffect } from 'react'

import Overlay from './Overlay'

export default function Tile(props) {
  const [open, setOpen] = useState(false)

  // effect that hides scrollbar when overlay is open
  useEffect(() => {
    open
      ? document.querySelector('body').style.overflow = "hidden"
      : document.querySelector('body').style.overflow = "auto"
    open && document.addEventListener("keydown", (e) => {
      e.keyCode === 27 && setOpen(false)
    })
  }, [open])

  return (
    <>
      <div onKeyPress={(e) => e.key === "Enter" && setOpen(!open)} onClick={() => setOpen(!open)} role="button" tabIndex="0" className="tile" style={{background: props.color}}>
        <p className="no-select hours">{props.start} - {props.end}</p>
        <p className="no-select label">{props.label}</p>
        <div className="tile-icon">
          <img src={props.icon} alt=""/>
        </div>
      </div>
      {open &&
        <Overlay backgroundColor={props.color} setOpen={setOpen} open={open}>
          {props.children}
        </Overlay>}
    </>
  )
}
