import { render } from './test-util';
import App from './App';

test('render the whole app without crashing', () => {
  render(<App />);
});
