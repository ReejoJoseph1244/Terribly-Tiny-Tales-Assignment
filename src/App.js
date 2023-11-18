import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Posts />
    </div>
  );
}

export default App;
