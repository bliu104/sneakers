import React from "react"
import useStyles from './style'

const Curtain = ({ curtain, leftpanel, rightpanel, content, children }) => {
  const classes = useStyles()

  return (

    <div className={[classes.curtain]}>
      <div className={[classes.leftpanel]}>
      </div>
      <div className={[classes.rightpanel]}>
      </div>
      <div class={[classes.content]}>
        {children}
      </div>
    </div>

  )
}

export default Curtain