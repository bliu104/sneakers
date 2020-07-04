import { createStyles, makeStyles } from '@material-ui/core/styles'
import { TEXT_LARGE, TEXT_NORMAL, TEXT_SMALL } from "../../../Constants/fonts"

const styles = () => createStyles({

  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: "bold"
  },
  large: {
    fontSize: TEXT_LARGE,
  },
  normal: {
    fontSize: TEXT_NORMAL,
  },
  small: {
    fontSize: TEXT_SMALL,
  },
})

export default makeStyles(styles)