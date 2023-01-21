import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundImage: "url(./background.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txt: {
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: '2.75rem',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '2.75rem',
        },
    },
}));

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant='h2'
                        style={{
                            marginBottom: 15,
                            fontFamily: 'Monoton',
                        }}
                        className={classes.txt}
                    >
                        Crypto Point
                    </Typography>

                    <Typography
                        variant='subtitle2'
                        style={{
                            color: 'darkgrey',
                            textTransform: 'capitalize',
                            fontFamily: 'Montserrat',
                        }}>
                        Get all the info regarding your favorite Crypto Currency
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner