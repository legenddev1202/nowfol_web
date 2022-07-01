import { Link as RouterLink } from 'react-router-dom';
// @mui
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// components
import Page from '../components/Page';
//
import { MaintenanceIllustration } from '../assets';
import { MotionViewport, varFade } from '../components/animate';
import Image from '../components/Image';
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const Circle = styled('div')(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  marginRight: 10,
  background: theme.palette.primary.circleColor,
}));

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <Page title="Maintenance">
      <Container>
        <ContentStyle>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Circle />
                <m.div variants={varFade().inRight}>
                  <Typography variant="h2" sx={{ mb: 1, color: 'primary.main' }}>
                    Target
                  </Typography>
                  <Typography variant="h2" sx={{ color: 'primary.main' }}>
                    Market
                  </Typography>
                </m.div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12}>
                  <div style={{ display: 'flex', marginLeft: 100 }}>
                    <Circle />
                    <div style={{ maxWidth: '90%' }}>
                      <m.div variants={varFade().inRight}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                          }}
                        >
                          Trader
                        </Typography>
                      </m.div>
                      <m.div variants={varFade().inRight}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                            fontWeight: 300,
                            mt: 1,
                          }}
                        >
                          A Trader who doesn't want to miss out on trading opportunities
                        </Typography>
                      </m.div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: 'flex' }}>
                    <Circle />
                    <div style={{ maxWidth: '90%' }}>
                      <m.div variants={varFade().inRight}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                          }}
                        >
                          Investor
                        </Typography>
                      </m.div>
                      <m.div variants={varFade().inRight}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                            fontWeight: 300,
                            mt: 1,
                          }}
                        >
                          An investor who want to know "Where is my money stored?"
                        </Typography>
                      </m.div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <div style={{ display: 'flex', marginLeft: 100 }}>
                <Circle />
                <div style={{ maxWidth: '90%' }}>
                  <m.div variants={varFade().inRight}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                      }}
                    >
                      Yield Farmer
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inRight}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                        fontWeight: 300,
                        maxWidth: 350,
                        mt: 1,
                      }}
                    >
                      A yield farmer who is always looking for the best yield and spreads his money across numerous
                      wallets
                    </Typography>
                  </m.div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12}>
                  <m.div variants={varFade().inUp}>
                    <MaintenanceIllustration sx={{ my: 10, height: 240 }} />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </Page>
  );
}
