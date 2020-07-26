import React, { Fragment } from 'react';
import ThemeContext from '../context/ThemeContext';
import Container from '../common/Container';
import Phonebook from './Phonebook/Phonebook';

function App() {
  return (
    <Fragment>
      <ThemeContext>
        <Container>
          <Phonebook />
        </Container>
      </ThemeContext>
    </Fragment>
  );
}

export default App;
