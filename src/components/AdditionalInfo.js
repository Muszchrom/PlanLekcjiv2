import { useState } from 'react'
import Overlay from './Overlay'

import ExercisesSVG from '../graphics/svgs/Exercises.svg'
import LaboSVG from '../graphics/svgs/Labo.svg'
import LectureSVG from '../graphics/svgs/Lecture.svg'
import LektoratSVG from '../graphics/svgs/Lektorat.svg'
import DefaultSVG from '../graphics/svgs/Default.svg'

import mapa from '../graphics/jpg/mapaKampusu.jpg'

export default function AdditionalInfo(props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {open &&
        <Overlay backgroundColor={"antiquewhite"} setOpen={setOpen} open={open}>
          <a href="http://we1.pollub.pl/ats4/" target="_blank" rel="noreferrer" style={{textDecoration: "underline"}}>Oryginalny plan</a>
          <ul style={{marginTop: "2em"}}>
            <li>E XXX - Wydział Elektrotechniki i Informatyki</li>
            <li>CI XXX, Rdzewiak</li>
            <li>CT XXX - CenTech</li>
            <li>PE 15a - Katedra Informatyki (Pentagon)</li>
            <li>M IX - Wydział Mechaniczny</li>
          </ul>
          <div className="image-frame animated-background">
            <img src={mapa} style={{width: "100%", height: "100%", border: "1px solid wheat", objectFit: "cover"}} alt="Mapa kampusu"/>
          </div>
          <ul style={{marginTop: "2em"}}>
            <li><img src={ExercisesSVG} alt=""/> - Wykład</li>
            <li><img src={LaboSVG} alt=""/> - Laboratoria</li>
            <li><img src={LectureSVG} alt=""/> - Ćwiczenia</li>
            <li><img src={LektoratSVG} alt=""/> - Lektorat</li>
            <li><img src={DefaultSVG} alt=""/> - Podstawowa ikona</li>
          </ul>
        </Overlay>
      }
      <button style={{background: "lightcoral", position: "sticky", marginLeft: "auto", marginRight: "1em"}} aria-label="Additional info" className="absolute-button" onClick={() => setOpen(!open)}>
        <div className="dots"></div>
      </button>
    </>
  )
}
