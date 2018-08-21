import React from 'react'

import Kawax from 'kawax-js';
import RootReducer from '../reducers';
import RootContainer from '../containers/Root';

const App = () => (
  <div></div>
)

window.onload = () => {
  Kawax.new({
    htmlRoot: 'app',
    container: RootContainer,
    reducer: RootReducer.export(),
  });
};

export default App
