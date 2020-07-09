import React from "react"
import useStyle from "./style"
import cx from "classnames"

const CustomButton = ({ onClick, name }) => {
  const classes = useStyle()

  return (

    <div onClick={onClick}>
      <div className={[classes.container]}>
        <a className={cx(
          [classes.reflective],
          [classes.effect1]
        )}>
          <span>{name}</span>
        </a>
      </div>
    </div >
  )
}

export default CustomButton