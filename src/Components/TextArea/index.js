import React from "react"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useStyles from "./style"
import cx from 'classnames'


const Textarea = ({ placeholder, color }) => {
  const classes = useStyles()

  return (
    <div className={cx(
      { [classes.color]: color }
    )
    }>
      <TextareaAutosize placeholder={placeholder} />
    </div >
  )
}
export default Textarea