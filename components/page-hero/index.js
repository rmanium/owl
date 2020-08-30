import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from 'components/info';
import Section from 'components/section';
import Link from 'components/Link';
import { red } from '@material-ui/core/colors';
// const coringImage = '/images/coring.jpg';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    // root: {
    //   // height: "100vh"
    //   // display: 'flex',
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
    //   '& h2': {
    //     fontSize: '3.7rem',
    //     [breakpoints.down('sm')]: {
    //       fontSize: '1.7rem',
    //     },
    //   },
    // },
    // landingPage: {
    //   [breakpoints.down('sm')]: {
    //     display: 'none',
    //   },
    //   // [theme.breakpoints.up('md')]: {
    //   //   backgroundColor: theme.palette.primary.main,
    //   // },
    //   // [theme.breakpoints.up('lg')]: {
    //   //   backgroundColor: green[500],
    //   // },
    // },
    // heroBox: {
    //   display: 'flex',
    //   position: 'relative',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh',
    //   fontSize: '2.7rem',
    //   fontWeight: 600,
    //   textTransform: 'uppercase',
    //   transition: 'all 300ms',
    //   color: 'white',
    //   '&:hover': {
    //     color: 'white',
    //     backgroundColor: 'black',
    //   },
    // },
    // link: {
    //   zIndex: 2,
    //   pointerEvents: 'none',
    // },
    // colorBox: {
    //   transition: 'all 300ms',
    //   opacity: 0.2,
    //   position: 'absolute',
    //   zIndex: 1,
    //   height: '100%',
    //   width: '100%',
    //   '&:hover': {
    //     curser: 'pointer',
    //     opacity: 0.7,
    //   },
    // },
    // descriptionBlock: {
    //   '& p': {
    //     fontSize: 20,
    //   },
    // },
    serviceSection: {
      position: 'relative',
      margin: '0 auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // padding: 20,
      height: 500,
      marginTop: 10,
    },
    blackShade: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      opacity: 0.3,
      margin: 0,
      padding: 0,
      zIndex: 5,
    },
    learnMore: {
      color: palette.secondary.main,
    },
  }),
);

const Service = ({
  title = 'No Title',
  description,
  navbarSection = '',
  backgroundImageUri = '',
  learnMoreLink,
}) => {
  const classes = useStyles();
  const showDesc = !!(learnMoreLink || description);
  return (
    <Box
      className={classes.serviceSection}
      style={{
        backgroundImage: `url('${backgroundImageUri}')`,
      }}
      id={navbarSection}
    >
      <div className={classes.blackShade}>s</div>
      <Section
        withGrid
        justify="space-between"
        style={{
          position: 'absolute',
          zIndex: 10,
          flexWrap: 'nowrap',
          height: '100%',
        }}
      >
        <Info
          style={{ color: 'white' }}
          text={title}
          textProps={{
            component: 'p',
            fontSize: 'h3.fontSize',
            fontWeight: 'fontWeightBold',
          }}
        />
        {showDesc && (
          <Section alignItems={'flex-start'} direction="column">
            {description && (
              <Typography
                variant="h6"
                // color="primary"
                style={{ color: 'white' }}
              >
                {description}
              </Typography>
            )}
            {learnMoreLink && (
              <Link
                className={classes.learnMore}
                href={learnMoreLink}
              >
                LEARN MORE
              </Link>
            )}
          </Section>
        )}
      </Section>
    </Box>
  );
};

export default Service;
