import Link from 'next/link'
import React, { useState }from 'react'
import {
  AiOutlineHome as Home,
  AiOutlineFolderOpen as Folder,
  AiOutlinePicture as Portofolio,
  AiOutlineClose as Close,
  AiOutlineAppstore as App,
  AiOutlineUser as User,
} from 'react-icons/ai'
import { BsBriefcase as Case } from 'react-icons/bs'
import { BiMessageRounded as Msg } from 'react-icons/bi'
import { BsInfoCircle as About } from 'react-icons/bs'
function MobileMenu() {
  const [open, setOpen] = useState(false) 
  const clickHandler = () => {
  setOpen(!open)
  }
  return (
    <nav className="nav">
      <h2>atamurad</h2>
      <div className={`nav__menu nav__${!open && 'open'}`}>
         <ul className="nav__list">
        <li><Link href='/home'><a>Home<Home /></a></Link></li>
        <li><Link href='/about'><a>about<User /></a></Link></li>
          <li><Link href='/skills'><a>skills<Folder /></a></Link></li>
          <li><Link href='/services'><a>service<Case /></a></Link></li>

        <li><Link href='/portofolio'><a>Postroflio<Portofolio /></a></Link></li>
         <li><Link href='/contact'><a>Contact<Msg/></a></Link></li>
      </ul>
      </div>
      <div className="nav__btns">
        <div onClick={clickHandler} className="nav__toogle">
          {!open ? <App /> : <Close />}
        
        </div>
      </div>
    </nav>
  )
}

export default MobileMenu

