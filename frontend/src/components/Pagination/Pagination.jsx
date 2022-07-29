import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.scss';

export const Paginations = () => {
    return (
        <div className='paginatinon'>
            <Stack>
                <Pagination count={10} variant="outlined" color="secondary" shape="rounded" />
            </Stack>
        </div>
    )
}
