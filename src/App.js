import './App.css';
import React , { useState } from 'react'
import SearchBar from "./components/SearchBar"
import ImageList from './components/ImageList';

function App() {
  const [pics, setPics] = useState([])
  const [term, setTerm] = useState("")

  

  return (
    <div className="ui container" style={{marginTop : '10px'}}>
      <SearchBar term={term} setTerm={setTerm} setPics={setPics}/>
      <ImageList pics={pics}/>
    </div>
  );
}

export default App;
