import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return < ><Box component="img" 
  // src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg" 
  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62a2a55e87f6544c42fa0e73_2022%20Logo%20Icon%20(2).svg" 

  sx={{ width: 40, height: 30, ...sx }} />
  {/* <div className="logo-name ms-1">Donorport</div> */}
  </>;
}
