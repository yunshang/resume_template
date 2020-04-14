import Loadable from 'react-loadable';
import { Loading } from './components';

const fakeDelay = (ms:number) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});

const Resume = Loadable({
   loader: () => fakeDelay(500).then(() => import('./containers/Resume/Resume')),
   loading: Loading,
});

export { Resume };