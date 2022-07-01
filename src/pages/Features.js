// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials, PricePredictionTwo } from '../sections/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Features() {
  return (
    <Page title="Features">
      <RootStyle>
        <AboutHero />

        <AboutWhat />

        <AboutVision />

        <AboutTeam />

        <AboutTestimonials />

        <PricePredictionTwo />
      </RootStyle>
    </Page>
  );
}
