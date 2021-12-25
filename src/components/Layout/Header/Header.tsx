import Link from 'next/link'
import React from 'react'
import Switcher from '../../../utils/Switcher/Switcher'

export default function Header() {
  return (
    <header className="header">
      <Switcher />
      <ul className="list">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>skills</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>portofolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>contact me</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
