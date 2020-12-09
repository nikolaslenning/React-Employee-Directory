import './App.css';
import { Employees } from "./Employee"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Table from "./components/Table"
import React from 'react'

function App() {

  const [sortValue, setSortValue] = React.useState('')
  const [dataValue, setDataValue] = React.useState(Employees)
  const [inputValue, setInputValue] = React.useState('')
  
  const handleInput = (event) => {
    event.preventDefault();
    console.log(dataValue)
    if (inputValue) {

      setDataValue(dataValue.filter(employee => {
        return employee.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      }))
      setInputValue("")
    }
  }

  const handleSortValue = (event) => {
    setDataValue(Employees)
    setSortValue(event.target.value)
  }

  const handleInputChange = (event) => {
    setDataValue(Employees)
    setInputValue(event.target.value)
  }

  if (sortValue === "Name (A-Z)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Name (Z-A)") {
    dataValue.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortValue === "Email (A-Z)") {
    dataValue.sort((a, b) => {
      if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
      if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortValue === "Email (Z-A)") {
    dataValue.sort((a, b) => {
      if (a.email.toLowerCase() > b.email.toLowerCase()) return -1;
      if (a.email.toLowerCase() < b.email.toLowerCase()) return 1;
      return 0;
    });  
  } else if (sortValue === "None") {
    dataValue.sort((a, b) => {      
      return a.id -b.id;
    });
  }

  return (
    <div>
      <Header
        title="Employee Directory"
      />
      <Searchbar
        inputValue={inputValue}
        handleInput={handleInput}
        handleInputChange={handleInputChange}
      />
      <Dropdown sortValue={sortValue} handleSortValue={handleSortValue} />

      { dataValue ? <Table employees={dataValue} /> : <h3>doesnt compute</h3>}

    </div>
  );
}


export default App;
