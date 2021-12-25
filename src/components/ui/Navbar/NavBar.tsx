import Link from 'next/link'
import React from 'react'
import {
  AiOutlineHome as Home,
  AiOutlineFolderOpen as Folder,
  AiOutlineFire as Fire,
} from 'react-icons/ai'
import { BsInfoCircle as Info } from 'react-icons/bs';
import { FiPhoneCall as Call } from 'react-icons/fi';
import { BsLightningCharge as Light } from 'react-icons/bs';
function NavBar() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link href="/">
            <a>
              <span className="icon"><Home/></span>
              <span className="text">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span className="icon"><Info/></span>
              <span className="text">about</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span className="icon"><Light/></span>
              <span className="text">skills</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span className="icon"><Folder/></span>
              <span className="text">portofolio</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <span className="icon"><Call/></span>
              <span className="text">contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
