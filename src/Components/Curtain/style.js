import { createStyles, makeStyles } from '@material-ui/core/styles'

const styles = () => createStyles({

  curtain: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  rightpanel: {
    width: "50%",
    height: "100vh",
    float: "left",
    zIndex: 2,
    position: "relative",
    background: "black",
    animation: "$slideInFromRight 2s ease-out forwards"
  },
  leftpanel: {
    width: "50%",
    height: "100vh",
    float: "left",
    zIndex: 2,
    position: "relative",
    background: "black",
    animation: "$slideInFromLeft 2s ease-out forwards",
  },

  content: {
    position: "absolute",
    width: "100%",
    top: "50%",
    transform: "translateY(-50 %)",
    background: 333,
    zIndex: 1,
    textAlign: "center",
  },

  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(0%)"
    },
    "100%": {
      transform: "translateX(-100%)"
    }
  },
  "@keyframes slideInFromRight": {
    "0%": {
      transform: "translateX(0%)"
    },
    "100%": {
      transform: "translateX(100%)"
    }
  }


})


export default makeStyles(styles)