
import './App.css';
import Card from './components/Card';
import Navbar from './components/navbar/Navbar';

function App() {

  
  return (
    <div className="App ">
      <Navbar />
        <div className="d-flex justify-content-around mt-5">
          <Card />
        </div>
    </div>
  );
}

export default App;

