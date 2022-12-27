import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useMediaQueryCustom = () => {
  const theme = useTheme();

  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('desktopLarge'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('laptop'));
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));

  let match = null;

  switch (true) {
    case isLargeDesktop:
      match = 'desktopLarge';
      break;
    case isDesktop:
      match = 'desktop';
      break;
    case isLaptop:
      match = 'laptop';
      break;
    case isTablet:
      match = 'tablet';
      break;
    default:
      match = 'mobile';
  }

  return match;
};

export default useMediaQueryCustom;
