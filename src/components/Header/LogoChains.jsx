import { Box, IconButton } from '@mui/material';
import variables from '../../styles/variables.scss';

import { IconEtherium } from '../Icons/IconEtherium';
import { IconBinance } from '../Icons/IconBinance';
import { IconPoligon } from '../Icons/IconPolygon';

const iconChainsStyle = {
  border: `2px solid ${variables.colorLimeAccent}`,
  backgroundColor: `${variables.glassStroke}`,
  '&:hover': {
    backgroundColor: 'rgba(88, 88, 88, 0.9)',
  },
};

export const LogoChains = () => {
  return (
    <Box sx={{ gap: 1, display: { mobile: 'none', tablet: 'inline-flex' } }}>
      <IconButton sx={iconChainsStyle}>
        <IconBinance />
      </IconButton>
      <IconButton sx={iconChainsStyle}>
        <IconEtherium width={24} height={24} />
      </IconButton>
      <IconButton sx={iconChainsStyle}>
        <IconPoligon width={24} height={24} />
      </IconButton>
    </Box>
  );
};
