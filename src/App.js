import './App.css';
import { BrowserRouter } from 'react-router-dom'
import IndexRoute from './router';

function App() {
  return (
    <BrowserRouter>
      <IndexRoute />
    </BrowserRouter>
  );
}

export default App;
