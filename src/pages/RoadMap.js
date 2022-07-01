// @mui
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// components
import Page from '../components/Page';
//
import { MotionViewport, varFade } from '../components/animate';
import Image from '../components/Image';
// assets
import { ComingSoonIllustration } from '../assets';

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

const firstData = ['Improvement of documents', 'Designing software interface and web site', 'Building RPC nodes'];

const secondData = [
  'Implementation of price-predicting algorithms',
  'Analysis of price chart for main crypto currencies and estimate of quality of algorithms',
  'Implementation of API features of all crypto exchanges',
];

const thirdData = [
  'Complete beta version of the project into Windows, Linux, macOS, web extension',
  'Reviewing project and finding solutions of issues.',
];

const forthData = ['Complete the official version based on the review of beta version.', 'Release of official version'];

// ----------------------------------------------------------------------

export default function ComingSoon() {
  return (
    <Page title="Maintenance">
      <Container>
        <ContentStyle>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Circle />
                <m.div variants={varFade().inRight}>
                  <Typography variant="h2" sx={{ mb: 1, color: 'primary.main' }}>
                    Our
                  </Typography>
                  <Typography variant="h2" sx={{ color: 'primary.main' }}>
                    Roadmap
                  </Typography>
                </m.div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
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
                          Q3 2022 (Building the basis of project)
                        </Typography>
                      </m.div>
                      {firstData.map((item, index) => (
                        <m.div variants={varFade().inRight} key={index}>
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
                              variant="h6"
                              sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                                fontWeight: 300,
                              }}
                            >
                              {item}
                            </Typography>
                          </div>
                        </m.div>
                      ))}
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
                          Q4 2022 (Development of backend)
                        </Typography>
                      </m.div>
                      {secondData.map((item, index) => (
                        <m.div variants={varFade().inRight} key={index}>
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
                              variant="h6"
                              sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                                fontWeight: 300,
                              }}
                            >
                              {item}
                            </Typography>
                          </div>
                        </m.div>
                      ))}
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
                          Q1 2023 (Beta version and Review)
                        </Typography>
                      </m.div>
                      {thirdData.map((item, index) => (
                        <m.div variants={varFade().inRight} key={index}>
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
                              variant="h6"
                              sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                                fontWeight: 300,
                              }}
                            >
                              {item}
                            </Typography>
                          </div>
                        </m.div>
                      ))}
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
                          Q2 2023 (Release official version)
                        </Typography>
                      </m.div>
                      {forthData.map((item, index) => (
                        <m.div variants={varFade().inRight} key={index}>
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
                              variant="h6"
                              sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                                fontWeight: 300,
                              }}
                            >
                              {item}
                            </Typography>
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </Page>
  );
}
