import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 800,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection:'column' }}>
      <Typography
            variant="h1"
            sx={{
              mt: 5,
              color: 'primary.main',
              alignSelf:'center'
            }}
          >
            Features
          </Typography>
        <ContentStyle>
          <Typography
            variant="h2"
            sx={{
              mt: 20,
              color: 'common.white',
            }}
          >
            Crypto Portfolio Management
          </Typography>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              1.1 Local Assets Management
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Exodus, Metamask, and other objects in a user's local wallet are
              <br />examples of local assets. Hundreds of supported coins, such as
              <br /> Bitcoin, Ethereum, ERC-20 Tokens, BEP-20 Tokens, and TRC-20
              <br /> Tokens, are available for management.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Every month, the NowFol development team adds support for new
              <br />cryptocurrencies, so keep an eye out for new additions. Or, even
              <br />better, contact our staff to express your enthusiasm for your favorite
              <br />currencies and have them added to NowFol!
            </Typography>
        
        
     
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
