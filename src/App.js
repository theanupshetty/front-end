import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import AppRoutes from './AppRoutes'

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
