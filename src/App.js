import './App.scss';
import Home from './screens/HomeScreen/HomeScreen';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
