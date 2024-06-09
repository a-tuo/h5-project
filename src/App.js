import './App.css';
import { BrowserRouter } from 'react-router-dom'
import IndexRoute from './router';
import './i18n/config'

function App() {
  return (
    <BrowserRouter>
      <IndexRoute />
    </BrowserRouter>
  );
}

export default App;
