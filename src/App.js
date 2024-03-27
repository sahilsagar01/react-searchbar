import { useEffect, useState } from 'react';
import './App.css';
import data from "./data"






function App() {
  const [vehicals, setVehicalsData] = useState([])
  const [searchInput, setSearchInput] = useState('')


useEffect(() => {
  const filteredData = data.filter(vehical => {
    return vehical.name.toLocaleLowerCase().includes(searchInput.toLowerCase())
  })
  searchInput.length > 0 ?  setVehicalsData([...filteredData]): setVehicalsData([...data])
  
},[searchInput])




  return (
    <div className="App">
      <div className='main'>
      <div className='heading'>
        <h1>Search Bikes & Cars</h1>
      </div>
      <div className='searchBox'>
        <label>Search</label>
        <input autoFocus onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type='search' />
      </div>
      <div className='resultBox'>
      {
        vehicals.map((item, index) => {
          return (
            <div key={index} className='card'>
          <p>{item.name}</p>
        </div>
          )
        })
      }
       
      </div>
      </div>
    </div>
  );
}

export default App;
