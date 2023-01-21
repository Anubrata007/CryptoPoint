import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { AuthModal, UserSidebar } from './index';

const useStyles = makeStyles(theme => ({
    title: {
        flex: 1,
        color: "rgba(5, 245, 209, 0.77)",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: '1rem',
            padding: '15px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem',
            padding: '15px',
        },
    }
}));

const Header = () => {

    const classes = useStyles();
    const history = useHistory();

    const { currency, setCurrency, user, } = CryptoState();
    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push("/")} className={classes.title} variant="h6">CRYPTO POINT</Typography>

                        <Select variant='outlined' style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)} >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>

                        {user ? <UserSidebar /> : <AuthModal />}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header