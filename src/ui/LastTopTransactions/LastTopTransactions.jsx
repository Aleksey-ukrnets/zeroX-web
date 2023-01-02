import {
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';
import { CommonAvatar } from '../../components/CommonAvatar/CommonAvatar';
import IconCopy from '../../components/Icons/IconCopy';
import { Title } from '../../components/Title/Title';
import { ContainerBox } from '../ContainerBox/ContainerBox';

const createData = (date, type, priceUSD, amountUSDT, address) => {
  return { date, type, priceUSD, amountUSDT, address };
};

const rows = [
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
  createData(
    '2022-12-02 00:05:13',
    'buy',
    '$292.24',
    '324.975',
    '0x7c6eA86cBF21E8AA8B5a7579e98aF44341095dba'
  ),
];

export const LastTopTransactions = () => {
  return (
    <ContainerBox mt={4} mb={4}>
      <Title>LAST TOP TRANSACTION</Title>
      <TableContainer component={Box} sx={{ backgroundImage: 'none' }} mt={2}>
        <Table>
          <TableHead>
            <TableRow className="tableRowCustom">
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price USD</TableCell>
              <TableCell>Amount USDT</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.address} className="tableRowCustom">
                <TableCell sx={{ minWidth: '160px' }}>{row.date}</TableCell>

                <TableCell size="small">
                  <Box display="inline-flex" alignItems="center">
                    <Typography variant="inherit" noWrap sx={{ width: '70px' }}>
                      {row.type}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell size="small" sx={{ minWidth: '120px' }}>
                  {row.priceUSD}
                </TableCell>
                <TableCell sx={{ minWidth: '120px' }}>
                  {row.amountUSDT}
                </TableCell>

                <TableCell size="small">
                  <Box display="inline-flex" alignItems="center">
                    <Typography
                      variant="inherit"
                      noWrap
                      sx={{ width: '120px' }}
                    >
                      {row.address}
                    </Typography>
                    <IconCopy mx="12px" textClipBoard={row.address} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerBox>
  );
};
