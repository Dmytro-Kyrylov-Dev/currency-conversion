import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import CurrencyInfo from './components/CurrencyInfo';

function App() {

  const [getUSD, setGetUSD] = useState();
  const [getEUR, setGetEUR] = useState();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main setGetUSD={setGetUSD} setGetEUR={setGetEUR} />
          </Route>
          <Route path="/info">
            <CurrencyInfo getUSD={getUSD} getEUR={getEUR} />
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;