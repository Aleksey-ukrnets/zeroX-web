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
import { useSelector } from 'react-redux';
import IconCopy from '../../components/Icons/IconCopy';
import { Title } from '../../components/Title/Title';
import { tokenDetailedInfoSelector } from '../../store/slices/tokenDetailedInfo';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import css from './lastTopTransaction.module.scss';

import useMediaQueryCustom from '../../hooks/useMediaQueryCustom';

export const LastTopTransactions = () => {
  const { tokenDetailedInfo } = useSelector(
    tokenDetailedInfoSelector.getTokenDetailedInfo
  );
  const mediaQuery = useMediaQueryCustom();

  return (
    <ContainerBox mt={4} mb={4}>
      <Title>LAST TOP TRANSACTION</Title>
      <TableContainer
        component={Box}
        sx={{ backgroundImage: 'none', height: '563px' }}
        mt={2}
      >
        <Table stickyHeader={mediaQuery === 'mobile' ? true : false}>
          <TableHead className="mobileHeadBg">
            <TableRow className="tableRowCustom">
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price USD</TableCell>
              <TableCell>Amount USDT</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokenDetailedInfo?.top_transactions?.map((transaction, indx) => (
              <TableRow
                key={transaction.address + indx}
                className={transaction.type === 'buy' ? css.Buy : css.Sell}
              >
                <TableCell sx={{ minWidth: '160px', color: 'inherit' }}>
                  {transaction.date}
                </TableCell>

                <TableCell size="small" sx={{ color: 'inherit' }}>
                  <Box display="inline-flex" alignItems="center">
                    <Typography
                      variant="inherit"
                      noWrap
                      sx={{
                        width: '70px',
                      }}
                    >
                      {transaction.type}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  size="small"
                  sx={{ minWidth: '120px', color: 'inherit' }}
                >
                  {transaction.price}
                </TableCell>
                <TableCell sx={{ minWidth: '120px', color: 'inherit' }}>
                  {transaction.amount}
                </TableCell>

                <TableCell size="small">
                  <Box display="inline-flex" alignItems="center">
                    <Typography
                      variant="inherit"
                      noWrap
                      sx={{ width: '120px' }}
                    >
                      {transaction.address}
                    </Typography>
                    <IconCopy mx="12px" textClipBoard={transaction.address} />
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
