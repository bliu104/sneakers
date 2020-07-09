import React from "react"
import MaterialButton from '@material-ui/core/Button'

const Button = ({ text, onClick, color }) => {
  return (
    <div>
      <MaterialButton color="color" onClick={onClick} >
        {text}
      </MaterialButton>
    </div>
  )
}
export default Button