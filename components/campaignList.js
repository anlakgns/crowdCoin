import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CampaignCard from './campaignCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const StyledStack = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: theme.palette.custom.textWhite
  },
}));

const CampaignList = ({summaryList}) => {
  return (
    <MainGrid item container>
      {summaryList.map(campaingInfo => {
        return (
          <CampaignCard key={campaingInfo.projectName} campaingInfo={campaingInfo} />
        )
      })}
      <StyledStack >
        <StyledPagination count={10} color="secondary" />
      </StyledStack>
    </MainGrid>
  );
};

export default CampaignList;
