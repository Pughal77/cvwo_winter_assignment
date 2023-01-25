import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <p>test</p>
      <div className="NavBar"><NavBar/></div>
      <div><Login/></div>
    </div>
  );
}

export default App;
