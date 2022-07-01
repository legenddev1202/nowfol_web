import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/contact/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Contact" sx={{ color: 'primary.main',mr: 2 }} variants={varFade().inRight} />
          <TextAnimate text="Us" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Email: info@nowfol.com
            </Typography>  
          </m.div>     
          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 2,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
             Website: https://www.nowfol.com
            </Typography>  
          </m.div>       
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
