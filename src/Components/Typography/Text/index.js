import React from 'react'
import cx from 'classnames'
import useStyles from './style'

const Text = ({ children, bold, italic, large, normal, small }) => {
  const classes = useStyles()

  return (
    <span className={cx(
      {
        [classes.bold]: bold,
        [classes.italic]: italic,
        [classes.large]: large,
        [classes.normal]: normal,
        [classes.small]: small,
      }
    )
    }>
      {children}
    </span>
  )
}
export default Text