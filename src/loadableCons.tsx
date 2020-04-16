// import Loadable from 'react-loadable';
import * as Loadable from 'react-loadable';
import { Loading } from './components';
import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;

const fakeDelay = (ms:number) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});

interface IProps {
}

const About: OptionsWithoutRender<IProps> = {
  loader: () => import('./containers/About/About'),
  loading: Loading,
};

const Resume = Loadable({
   loader: () => import('./containers/Resume/Resume'),
   loading: Loading,
});

const Experience = Loadable({
  loader: () => import('./containers/Experience/Experience'),
  loading: Loading,
});
const Technology = Loadable({
  loader: () => import('./containers/Technology/Technology'),
  loading: Loading,
});
const Education = Loadable({
  loader: () => import('./containers/Education/Education'),
  loading: Loading,
});
const Portfolio = Loadable({
  loader: () => import('./containers/Portfolio/Portfolio'),
  loading: Loading,
});

export { About, Experience, Technology, Education, Portfolio, Resume };