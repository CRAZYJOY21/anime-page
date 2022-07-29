import React from 'react';
import './Footer.scss';
import { Container } from '@mui/material';
import Logo from '../../assets/images/svg/logo.svg';
import styles from './Footer.module.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const images = "img";

export const Footer = () => {
    return (
        <footer className='Footer'>
            <Box>
                <Container maxWidth="lg">
                    <Grid container>
                        <div className='Footer__content'>
                            <div className='Footer__info'>
                                <Grid>
                                    <div className='Footer__logo'>
                                        <img src={Logo} alt={images} />
                                    </div>
                                    <div className="Footer__text">
                                        <span className={styles.text}>Лучший сайт по аниме 2022</span>
                                        <span className={styles.text2}>Единственный сайт с большим количеством <br /> сериалов и аниме за 2022, другого ты не найдешь </span>
                                    </div>
                                </Grid>
                            </div>
                            <div className='Footer__links'>
                                <Grid>
                                    <div className='Footer__link'>
                                        <ul className={styles.linkeds}>
                                            <li className={styles.linked}><a href="#">Главная</a></li>
                                            <li className={styles.linked}><a href="#">Сериалы</a></li>
                                            <li className={styles.linked}><a href="#">Фильмы</a></li>
                                            <li className={styles.linked}><a href="#">Новости</a></li>
                                            <li className={styles.linked}><a href="#">О проекте</a></li>
                                        </ul>
                                    </div>
                                </Grid>
                            </div>
                            <div className='Footer__media'>
                                <Grid>
                                    <div className='Footer__social'>
                                        <span>Социальные сети</span>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

