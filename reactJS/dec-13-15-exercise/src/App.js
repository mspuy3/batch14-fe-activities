import React, {useState, useEffect} from 'react'
import './App.css';
import ShowTable from './ShowTable';
import CreateName from './CreateName';
import UpdateName from './UpdateName';
import axios from 'axios';

const App = () => {

  // const testNames = [
  //   { id: 1, firstName: 'Luke', lastName: 'Skywalker' },
  //   { id: 2, firstName: 'Leah', lastName: 'Organa' },
  //   { id: 3, firstName: 'Padme', lastName: 'Amidala' },
  // ]

  const [gottenNames, setGottenNames] = useState([])
  const [names, setNames] = useState([])  

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, firstName: '', lastName: '' }
  const [currentEditor, setCurrentEditor] = useState(initialFormState)
  const updateRow = (name) => {
    setEditing(true)
    setCurrentEditor({ id: name.id, firstName: name.firstName, lastName: name.lastName })
  }

  const getNames = () => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then((response) => {
      console.log("this is the response", response.data);
      let gotNames = (response.data.results.map(function (el) {return el.name;}));
      return gotNames;
    })
    .then((gotNames) => setGottenNames(splitNames(gotNames)))
  }

  useEffect(() => {
    getNames()
    },[])

  useEffect(()=> {
    setNames(gottenNames);
  },[gottenNames])

  const splitNames = (arrayEntered) => {
    let arrayProccesed = arrayEntered.map(function (fullName) {
      let fullNameArray = fullName.split(" ");
      switch(fullNameArray.length) {
        case 1:
          return {firstName: fullNameArray[0], lastName: "🤖🤖🤖"}
        case 2:
          return {firstName: fullNameArray[0], lastName: fullNameArray[1]}
        case 3:
          return {firstName: fullNameArray[0] + " " + fullNameArray[1], lastName: fullNameArray[2]}
        default:
          return
      } 
    })

    arrayProccesed.forEach(arrayName => arrayName.id = arrayProccesed.indexOf(arrayName) + 1 );

    // console.log("Split",arrayProccesed);
    return arrayProccesed;
  }

  





  const createName = (name) => {
    name.id = names.length + 1
    setNames([...names, name])
  }

  const deleteName = (id) => {
    setNames(names.filter((name) => name.id !== id))
  }

  const updateName = (id, updatedName) => {
    setEditing(false)
    setNames(names.map((name) => (name.id === id ? updatedName : name)))
  }

  
  return (
    <div className="container">

      <h1 className="text-center">Star Wars ++</h1>
    
      <div className="flex-row">
        <div className="flex-large">
          
        {editing ? (
            <div>
              <h2 className="text-center">Update Name</h2>
              <UpdateName
                setEditing={setEditing}
                currentEditor={currentEditor}
                updateName={updateName}
              />
            </div>
          ) : (
            <div>
              <h2 className="text-center">Add Name</h2>
              <CreateName createName={createName} />
            </div>
          )
        }
        </div>
        
        <div className="flex-large">
          <h2 className="text-center">View Names</h2>
          <ShowTable names={names} updateRow={updateRow} deleteName={deleteName} />
        </div>
        
      </div>
    
    </div>
  )
}

export default App;
