import './index.css';
import App from './App';
import { render } from 'solid-js/web';

export default (container, props) => {
  render(() => <App {...props} />, container);
};
