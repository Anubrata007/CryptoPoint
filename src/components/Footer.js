import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#80808026",
    },
    footerContent: {
        height: 80,
        display: "flex",
        paddingTop: 30,
        justifyContent: "space-around",
    },
    tagline: {
        display: 'flex',
        height: '40%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    ftag: {
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.75rem',
        },
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.footerContent}>
                <div className={classes.tagline}>
                    <Typography
                        className={classes.ftag}
                        variant='subtitle2'
                        style={{
                            color: '#fff',
                            textTransform: 'capitalize',
                            fontFamily: 'Montserrat',
                        }}>
                        Copyright © Anubrata Chakraborty
                    </Typography>
                </div>
            </Container>
        </div>
    )
}

export default Footer;