import { makeStyles } from '@material-ui/core';
import Alert from './components/Alert';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components/index';
import { Homepage, CoinPage } from './Pages/index';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} />
        <Footer />
      </div>
      <Alert />
    </BrowserRouter>
  );
}



export default App;
