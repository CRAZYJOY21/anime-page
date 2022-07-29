import React, { useState } from 'react';
import './Card.scss';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Box from '@mui/material/Box';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../assets/images/png/img1.png';



const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    background: 'none'
}));

function FormRow({ title, description, favorites }) {

    const [state, setstate] = useState({
        text: 'Demon Slayers',
        description: 'Описание данного аниме',
        favorites: true
    });

    return (
        <React.Fragment>
            <Grid item xs={6} md={4}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Link to="/anime">
                                <Button size="small" color="primary">
                                    Смотреть
                                </Button>
                            </Link>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6} md={3}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={6} md={3}>
                <Item>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="120"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {state.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {state.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.Actions}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <FavoriteBorderOutlinedIcon className={state.favorites} />
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
        </React.Fragment>
    );
}

export const Cards = () => {

    return (
        <div className="Card">
            <div className='Card__new'>
                <h1 className={styles.text}>Вышедшие Новинки</h1>
                <Button variant="contained" color="secondary" startIcon={<DragIndicatorIcon />}>
                    Фильтр
                </Button>
            </div>
            <div className={styles.Card__content}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid container item spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
