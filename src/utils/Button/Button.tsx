import React, { useRef } from 'react'
interface IProps {
  style: string
  title: string
}

function Button(props: IProps) {
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.pageX - btnRef.current.offsetLeft
    const y = e.pageY- btnRef.current.offsetTop
    btnRef.current.style.setProperty('--x', x + 'px');
    btnRef.current.style.setProperty('--y', y + 'px')

  }
  return (
    <button ref={btnRef} onMouseMove={clickHandler} className={`btn btn--${props.style}`}>
      <span>

      {props.title}
      </span>
    </button>
  )
}
export default Button
