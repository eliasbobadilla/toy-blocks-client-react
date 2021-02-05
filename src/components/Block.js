import React from "react"
import PropTypes from "prop-types";
import {Box, makeStyles, Typography} from "@material-ui/core";
import {formatNumberWithZeros} from "../utils/numberFormat";

const Block = ({index, text}) => {
  const classes = useStyles();

  return(
    <Box className={classes.block}>
      <Typography className={classes.index}>
        {formatNumberWithZeros(index, 3)}
      </Typography>
      <Typography className={classes.text}>
        {text}
      </Typography>
    </Box>
  )
}

Block.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
}


const useStyles = makeStyles((theme) => ({
  block: {
    background: 'rgba(0, 0, 0, 0.12)',
    borderRadius: '2px',
    width: '100%',
    padding: '10px',
    marginBottom: '5px'
  },
  index: {
    fontSize: theme.typography.pxToRem(10),
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    color: '#304FFE'
  },
  text: {
    fontSize: theme.typography.pxToRem(14),
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '20px',
    letterSpacing: '0.25px',
    color: '#263238'
  }
}));
export default Block;
