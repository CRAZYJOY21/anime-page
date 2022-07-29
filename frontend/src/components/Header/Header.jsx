import React from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './Header.scss';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { purple } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';


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

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [open, setOpen] = React.useState(false);
  const [openActive, setOpenActive] = React.useState(false);

  const ClickButton = () => {
    setOpen(true);
  };

  const clickClose = () => {
    setOpen(false);
  };

  const clickedButton = () => {
    setOpenActive(true);
  };

  const clickedClose = () => {
    setOpenActive(false);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to="/">
        <img src={logo} alt="img" />
        </Link>
      </div>
      <div className='header__links'>
        <ul>
          <li><a href='#'>Главная</a></li>
          <li><a href="#">Сериалы</a></li>
          <li><a href="#"> Фильмы</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">О проекте</a></li>
        </ul>
      </div>
      {/* <div className='header__search'>
        <Box sx={{
          width: 200,
          maxWidth: '100%',
        }}>
          <TextField className='colorSettings' placeholder="Найти сериал или аниме" fullWidth label="search" id="fullWidth" color="secondary" focused> <SearchIcon /> </TextField>
        </Box>
      </div> */}
      <div className='header__login'>
        {/* <button>Авторизация</button>
        <button>Регистрация</button> */}
        <Stack spacing={2} direction="row">
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}></form>
            <ColorButton variant="contained" onClick={ClickButton}>Авторизация</ColorButton>
            <Dialog open={open} onClose={clickClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
              <DialogContent>
                <DialogContentText>Авторизуйтесь</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="name"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={clickClose} color="primary">Назад</Button>
                <Button onClick={clickClose} color="primary">Авторизоваться</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Box>
            <Button variant="outlined" color="secondary" onClick={clickedButton}>
              Регистрация
            </Button>
            <Dialog open={openActive} onClose={clickedClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
              <DialogContent>
                <DialogContentText>Авторизуйтесь</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="name"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={clickedClose} color="primary">Назад</Button>
                <Button onClick={clickedClose} color="primary">Авторизоваться</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Stack>
      </div>
    </header>
  )
}
