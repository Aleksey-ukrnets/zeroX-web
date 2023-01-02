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

const createData = (rank, address, percentage, value, unlockDate) => {
  return { rank, address, percentage, value, unlockDate };
};

const rows = [
  createData(
    1,
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba',
    '8.5083%',
    '$92,652,001,61'
  ),
  createData(2, 237, '8.5083%', '$92,652,001,61'),
  createData(3, 262, '8.5083%', '$92,652,001,61', '22.10.2022'),
  createData(4, 305, '8.5083%', '$92,652,001,61'),
  createData(5, 356, '8.5083%', '$92,652,001,61', '22.10.2022'),
];

export const ChartTopHolders = () => {
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
                {rows.map((row) => (
                  <TableRow key={row.address} className="tableRowCustom">
                    <TableCell component="th" scope="row" size="small">
                      <Box display="inline-flex" alignItems="center">
                        {row.rank}
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
                          {row.address}
                        </Typography>
                        <IconCopy mx="12px" textClipBoard={row.address} />
                      </Box>
                    </TableCell>
                    <TableCell size="small">{row.percentage}</TableCell>
                    <TableCell>{row.value}</TableCell>
                    <TableCell>{row.unlockDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </ContainerBox>
  );
};
