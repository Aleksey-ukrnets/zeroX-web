import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { topMarketInfoSelector } from '../../store/slices/topMarketInfo';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import variable from '../../styles/variables.scss';

export const TableLosers = () => {
  const { topMarketInfo } = useSelector(
    topMarketInfoSelector.getTopMarketInfoData
  );

  if (topMarketInfo.losers) {
    return (
      <ContainerBox mt={4} mb={4}>
        <Typography variant="h6" mb={2} align="center">
          Losers
        </Typography>

        <TableContainer
          component={Box}
          sx={{ backgroundImage: 'none', height: '380px' }}
        >
          <Table>
            <TableHead>
              <TableRow className="tableRowCustom">
                <TableCell></TableCell>
                <TableCell>BTC</TableCell>
                <TableCell>%24h</TableCell>
                <TableCell>Liquidity</TableCell>
                <TableCell>Holders</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topMarketInfo?.losers.map((info, indx) => (
                <TableRow key={indx} className="tableRowCustom">
                  <TableCell component="th" scope="row" size="small">
                    <Box display="inline-flex" alignItems="center">
                      <Box sx={{ width: 10 }}>{indx + 1}</Box>
                      <Box ml={1.5}>
                        <Avatar
                          src={info?.token_logo}
                          sx={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'rgb(255 255 255 / 10%)',
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell size="small">
                    <Box display="inline-flex" alignItems="center">
                      <Typography variant="inherit" noWrap>
                        {info?.token_name}({info?.ticker})
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell size="small">
                    <Typography
                      variant="inherit"
                      noWrap
                      sx={{
                        color:
                          info?.value_type === 'up'
                            ? variable.colorOrange
                            : '#fff',
                      }}
                    >
                      {info.value_percent}%
                    </Typography>
                  </TableCell>
                  <TableCell>{info?.liquidity}</TableCell>
                  <TableCell>{info?.holders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContainerBox>
    );
  } else {
    return null;
  }
};
