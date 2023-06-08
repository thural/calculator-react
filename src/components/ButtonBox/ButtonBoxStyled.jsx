import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

export const StyledGrid = styled(Grid)({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '.5rem',
});