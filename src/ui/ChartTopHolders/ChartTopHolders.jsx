import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Title } from '../../components/Title/Title';
import { ContainerBox } from '../ContainerBox/ContainerBox';

import '../../styles/ui/TableContainer/GlobalTableContainer.css';
import { CommonAvatar } from '../../components/CommonAvatar/CommonAvatar';
import IconCopy from '../../components/Icons/IconCopy';
import { useSelector } from 'react-redux';
import { tokenDetailedInfoSelector } from '../../store/slices/tokenDetailedInfo';
import { DateTime } from 'luxon';

export const ChartTopHolders = () => {
  const { tokenDetailedInfo } = useSelector(
    tokenDetailedInfoSelector.getTokenDetailedInfo
  );

  return (
    <ContainerBox mt={4} mb={4}>
      <Title>Chart & Top holders</Title>
      <Grid container spacing={3.75} mt={0}>
        <Grid item mobile={12} tablet={6}>
          <Box sx={{ height: '100%', borderRadius: 1, minHeight: '550px' }}>
            <iframe
              height="100%"
              width="100%"
              id="geckoterminal-embed"
              title="GeckoTerminal Embed"
              src="https://www.geckoterminal.com/bsc/pools/0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae?embed=1&info=0&swaps=0"
              frameBorder="0"
              style={{ borderRadius: '8px' }}
              allow="clipboard-write"
              allowFullScreen
            />
          </Box>
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <Typography variant="h6" mb={2}>
            Top holders
          </Typography>
          {tokenDetailedInfo?.holders?.length > 0 && (
            <TableContainer component={Box} sx={{ backgroundImage: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow className="tableRowCustom">
                    <TableCell>Rank</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Unlock date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tokenDetailedInfo?.holders.map((info, indx) => (
                    <TableRow key={indx} className="tableRowCustom">
                      <TableCell component="th" scope="row" size="small">
                        <Box display="inline-flex" alignItems="center">
                          <Box sx={{ width: 10 }}>{indx + 1}</Box>
                          <Box ml={1.5}>
                            <CommonAvatar
                              widthProps={{ mobile: '20px', tablet: '20px' }}
                              heightProps={{ mobile: '20px', tablet: '20px' }}
                            />
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell size="small">
                        <Box display="inline-flex" alignItems="center">
                          <Typography
                            variant="inherit"
                            noWrap
                            sx={{ width: '70px' }}
                          >
                            {info?.address}
                          </Typography>
                          <IconCopy mx="12px" textClipBoard={info?.address} />
                        </Box>
                      </TableCell>
                      <TableCell size="small">{info?.percent}%</TableCell>
                      <TableCell>{info?.balance}</TableCell>
                      <TableCell sx={{ minWidth: '100px' }}>
                        {Boolean(info?.is_locked) &&
                          DateTime.fromISO(
                            info?.locked_detail[0]?.end_time
                          ).toFormat('dd.LL.yyyy')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </ContainerBox>
  );
};
