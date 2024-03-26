import './App.css';
import React from 'react';
import TodoList from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from './download.jpeg'


function App() {

  return (
    <div className="App" style={{
      "backgroundImage": `url(${backgroundImage})`,
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "100%",
      "height": "100%",
    }}>
      <TodoList />
    </div>
  );
}

export default App;

