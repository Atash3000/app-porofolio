import React from 'react'
interface IProps {
  style: string
  title: string
}

function Button(props: IProps) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  
  }
  return (
    <button onClick={clickHandler} className={`btn btn--${props.style}`}>
      {props.title}
    </button>
  )
}
export default Button
