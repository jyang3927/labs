
import './App.css';
import { AdDesigner } from './components/AdDesigner';
import Header from './components/Header';
import { Votes } from './components/Votes';
import styles from './styles/votes.module.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className ="mainStyle "> 
        <AdDesigner/>
        <Votes/>
      </div>
    </div>
  );
}

export default App;
