import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from './drizzleOptions';
import AllProjects from "./AllProjects";
import DonateComponent from './DonateComponent';
import './App.css';
import Route from './route'

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
              {/* <DonateComponent drizzle={drizzle} drizzleState={drizzleState} />
              <AllProjects drizzle={drizzle} drizzleState={drizzleState} /> */}
              <Route drizzle={drizzle} drizzleState={drizzleState}/>
            </div>
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
