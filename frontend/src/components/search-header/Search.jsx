import React from 'react';
import './Search.scss';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Container } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
            // '&:focus': {
            //     width: '32ch',
            // },
        },
    },
}));

export const SearchHeader = () => {
    return (
        <section className='search'>
            <div className='search__text'>
                <h1>Свежие онгоинги</h1>
                <LiveTvIcon color="secondary" />
            </div>
            <div className='search__box'>
                {/* <Box sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}>
                        <TextField className='colorSettings' placeholder="Найти сериал или аниме" fullWidth label="search" id="fullWidth" color="secondary" focused>  </TextField>
                        <SearchIcon />
                    </Box> */}
                <Box sx={{ flexGrow: 1 }}>
                    <Search color="#651fff">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Введите название..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
            </div>
        </section>
    )
}
