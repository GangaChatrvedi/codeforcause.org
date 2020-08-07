//eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import styled from '@emotion/styled';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '80px 24px',
    '& > *': {
      width: theme.spacing(16),
      height: theme.spacing(16)
    },
    [theme.breakpoints.down('xs')]: {
      padding: '80px 24px'
    }
  },
  large: {
    width: 68,
    height: 68,
    margin: 'auto'
  },
  extraMargin: {
    marginTop: '0',
    [theme.breakpoints.down('xs')]: {
      marginTop: '70px'
    }
  }
}));

function TestimonialCard({ student }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.extraMargin}>
        <Message>
          <Typography variant="h3" align="center">
            <FormatQuoteIcon fontSize="large" style={{ color: 'purple' }} />
          </Typography>

          <Typography variant="h3" align="center" style={{ fontSize: '20px' }}>
            {student.msg}
          </Typography>
        </Message>
        <Typography
          component="div"
          style={{
            width: '250px',
            margin: 'auto',
            marginTop: '30px'
          }}
        >
          <Avatar
            alt={student.name}
            src="./quote.png"
            className={classes.large}
          />

          <Typography
            variant="h5"
            align="center"
            style={{
              margin: 'auto'
            }}
          >
            {student.name}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{
              margin: 'auto'
            }}
          >
            {student.name}
          </Typography>
        </Typography>
      </Box>
    </div>
  );
}

const Message = styled.div`
  position: relative;
  height: 200px;
  width: 250px;
  max-width: 400px;
  background: #fff;

  padding: 40px 20px;
  box-sizing: box-order;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.12);
  &:after {
    position: absolute;
    width: 20px;
    height: 20px;

    top: 100%;
    left: 50%;
    margin-left: -10px;
    content: '';
    transform: rotate(45deg);
    margin-top: -10px;
    background: #ffffff;
  }
  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.12);
  }
`;

export default TestimonialCard;
