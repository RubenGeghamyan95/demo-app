import logo from './logo.svg';
import './App.css';
//import Counter from './classes';
import List from './list'

function App() {

  const colors = ['green','yellow','orange','light red','red']    
  return (
    <div className="App">
      <List colors = {colors} />
    </div>
  );
}

export default App;
