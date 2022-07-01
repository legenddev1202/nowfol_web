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
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Typography
            variant="h1"
            sx={{
              mt: 5,
              color: 'primary.main',
            }}
          >
            What is Nowfol?
          </Typography>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              NowFol is a multi-featured crypto asset management
              <br /> platform that allows users to manage all of their crypto
              <br /> assets, both local and remote. Local assets include
              <br /> Exodus, Metamask, and other items saved in a user' s local
              <br /> wallet.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              When we mention remote assets, we mean what a user
              <br /> keeps on cryptocurrency exchanges like Coinbase,
              <br /> Binance, Huobi, and Kraken. Using API keys obtained from
              <br /> crypto exchanges, the user can control his remote assets.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Users can also use the platform's price prediction feature
              <br /> to avoid missing out on trading opportunities.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              We aim to provide users with a Multi-Chain crypto asset
              <br /> management that is both comprehensive and useful.
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
