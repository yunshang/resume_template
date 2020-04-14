import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ResumeLayout from './ResumeLayout/ResumeLayout';
import { Resume } from '../loadableCons';

interface Fn extends Route {
  component: () => void,
  layout: () => void,
  rest: string[],
}

const AppRoute = ({ component, layout, ...rest }: Fn) => (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
  
  export default () => (
    <HashRouter >
      <Switch>
        <AppRoute exact path="/" layout={ResumeLayout} component={Resume} />
      </Switch>
    </HashRouter >
  );