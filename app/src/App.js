import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from './drizzleOptions';
import Route from './route';
import Navbar from './components/Navbar';

import './App.css';

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext) => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return 'Loading...';
          }

          return (
            <div>
              <Navbar />
              <Route drizzle={drizzle} drizzleState={drizzleState} />
            </div>
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
