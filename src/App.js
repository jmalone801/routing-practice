import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import NumberAndWord from './components/NumberAndWord';
import WordAndColor from './components/WordAndColor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/:num">
            <NumberAndWord />
          </Route>

          <Route exact path="/:word/:color1/:color2">
          <WordAndColor />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
