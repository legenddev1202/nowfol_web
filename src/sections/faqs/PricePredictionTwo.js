import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
import { _skills } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function PricePredictionTwo() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={5} lg={5} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="/assets/illustrations/illustration_components.png"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={7} lg={7}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                Price-Prediction
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  mt: 5,
                }}
              >
                Our Advantages
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant="h4"
                  sx={{
                    mr: 1,
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  Users can choose from a variety of timetables (short-term and long-term) to predict the price of
                  cryptocurrecy using the Price-Prediction tool of NowFol.
                </Typography>
              </div>
            </m.div>
            <m.div variants={varFade().inRight}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant="h4"
                  sx={{
                    mr: 1,
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  Users can specify the token (predict token's price in USD) and token pair (predict exchange rate for
                  the pair) that they want to use for the Price-Prediction tool
                </Typography>
              </div>
            </m.div>
            <m.div variants={varFade().inRight}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant="h4"
                  sx={{
                    mr: 1,
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  "Combination of GRU and LSTM models" is the Machine Learning Algorithm used by NowFol
                </Typography>
              </div>
            </m.div>
            <m.div variants={varFade().inRight}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant="h4"
                  sx={{
                    mr: 1,
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  }}
                >
                  User can reach a greater prediction accuracy with NowFol than with any other stock price prediction
                  algorithm.
                </Typography>
              </div>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
