import { createStyles, makeStyles } from '@material-ui/core/styles'

const styles = () => createStyles({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FFF",
    padding: "40px 0px",
    width: "240px",
  },

  reflective: {
    letterSpacing: "0.1em",
    cursor: "pointer",
    fontSize: "1em",
    fontWeight: "400",
    lineHeight: "45px",
    maxWidth: "160px",
    position: "relative",
    textDecoration: "none",
    textTransform: "up",
    width: "100%",
    fontFamily: "Noto Sans JP, sans-serif",
    "&:hover": {
      textDecoration: "none",
    }
  },
  effect1: {
    color: "#FFF",
    border: "4px solid #000",
    boxShadow: "0px 0px 0px 1px #000 inset",
    backgroundColor: "#000",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.3s ease-in -out",
    "&:hover": {
      border: "4px solid #666",
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 0px 4px #EEE inset",
    },
    "&:after": {
      background: "#FFF",
      border: "0px solid #000",
      content: '""',
      height: "155px",
      left: "-75px",
      opacity: .8,
      position: "absolute",
      top: "-50px",
      transform: "rotate(35deg)",
      width: '50px',
      transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)",
      zIndex: 1,
    },
    '&:hover:after': {
      background: "#FFF",
      border: "20px solid #000",
      opacity: 0,
      left: "120%",
      transform: "rotate(40deg)"
    }
  }

})

export default makeStyles(styles)