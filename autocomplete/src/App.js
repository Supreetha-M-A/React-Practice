import { useState } from 'react';
import './App.css';
import JSONData from './MOCK_DATA.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
    <input type='text' placeholder='Search...' onChange={event => setSearchTerm(event.target.value)}></input>
    {JSONData.filter((val)=> {
      if(searchTerm === '') {
        return val;
      } else if(val.first_name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        return val;
      }
      return '';
    }).map((val, index) => {
      return <div key={index}>
        <p>{val.first_name}</p>
      </div>
    })}
    </div>
  );
}

export default App;
