import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './config/AllRoutes';

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
