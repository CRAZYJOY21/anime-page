import React from 'react';
import logo from '../../images/svg/logo.svg';
import './Header.scss';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ClickButton = () => {
  console.log('good')
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} />
      </div>
      <div className='header__links'>
        <ul>
          <li><a href='#'>Главная</a></li>
          <li><a>Сериалы</a></li>
          <li><a> Фильмы</a></li>
          <li><a>Новости</a></li>
          <li><a>О проекте</a></li>
        </ul>
      </div>
      <div className='header__login'>
        {/* <button>Авторизация</button>
        <button>Регистрация</button> */}
        <Stack spacing={2} direction="row">
          <ColorButton variant="contained" onClick={ClickButton}>Авторизация</ColorButton>
          <Button variant="outlined" color="secondary">
            Регистрация
          </Button>
        </Stack>
      </div>
    </header>
  )
}
