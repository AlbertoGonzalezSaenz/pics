import './App.css';
import React , { useState } from 'react'
import SearchBar from "./components/SearchBar"

function App() {
  const [pics, setPics] = useState([])
  const [term, setTerm] = useState("")

  const displayPics = () => {
    return pics.map(pic => <img src={pic.urls.regular} />)
  }

  return (
    <div className="ui container" style={{marginTop : '10px'}}>
      <SearchBar term={term} setTerm={setTerm} setPics={setPics}/>
      {displayPics()}
    </div>
  );
}

export default App;
