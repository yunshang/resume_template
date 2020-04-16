import React from 'react';
import { HashRouter, Route, Switch, RouteComponentProps,  RouteProps } from 'react-router-dom';
import ResumeLayout from './ResumeLayout/ResumeLayout';
import { Resume } from '../loadableCons';

interface ResumeLayoutProps {
  children: React.ReactNode
}

interface AppRouteProps extends RouteProps{
  Layout: React.ComponentClass<ResumeLayoutProps>,
  Component: (props: RouteComponentProps) => JSX.Element,
}

const AppRoute = ({ Component, Layout, ...rest }: AppRouteProps) => (
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
  <HashRouter>
    <Switch>
      <AppRoute exact path="/" Layout={ResumeLayout} Component={Resume} />
    </Switch>
  </HashRouter>
);