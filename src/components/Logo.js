import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <Image alt="sketch icon" src="assets/nowfol_logo.png" sx={{ width: 40, height: 40, mr: 1 }} />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
