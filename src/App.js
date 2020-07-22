import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useAuth0 } from '@auth0/auth0-react';

import Container from './styled/Container';
import Main from './styled/Main';
import Global from './styled/Global';

import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Navbar from './components/Navbar';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Router>
        <Global />
        <Main>
          <Container>
            <Navbar />
            <Switch>
              <Route path='/game' component={Game} />
              <Route path='/highscores' component={HighScores} />
              <Route path='/gameover' component={GameOver} />
              <Route path='/' component={Home} />
            </Switch>
          </Container>
        </Main>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
