import { useState } from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import { react } from "@babel/types";
import DataGrid from '@material-ui/core/Table';
import Tables from "./components/Tables"

const App = () => {
  const [process, setNProcess] = useState(0)
  const [resources, setNResources] = useState(0)
  const [allocatedTable, setAllocationTable] = useState([])
  const [maxTable, setMaxTable] = useState([])
  const [availableTable, setAvailableTable] = useState([])
  const [needTable, setNeedTable] = useState([])
  
  const createTables = (input) => {
    setAllocationTable((input.allocation.split(/\r?\n/)).map((e) => (
      e.split(',')
    )))
    setMaxTable((input.max.split(/\r?\n/)).map((e) => (
      e.split(',')
    )))
    setAvailableTable((input.available.split(/\r?\n/)).map((e) => (
      e.split(',')
    )))
    setNProcess(input.process)
    setNResources(input.resources)
    calculateNeeded()
  }

  const calculateNeeded = () => {
    let newNeedTable = [[]]
    for(let i=0; i < process; i++){
      for(let j=0; j < resources; j++){
        newNeedTable[i][j] = Number(maxTable[i][j]) - Number(allocatedTable[i][j])
      }
    }
    setNeedTable(newNeedTable)
  }

  return (
    <div>
      <Header/>
      <Form onAdd={createTables}/>
      <div>
        {allocatedTable.length > 0 ? <Tables table={allocatedTable} name="Allocation" /> : <div></div>}
        {maxTable.length > 0 ? <Tables table={maxTable} name="Max" /> : <div></div>}
        {availableTable.length > 0 ? <Tables table={availableTable} name="Available" /> : <div></div>}
        {needTable.length > 0 ? <Tables table={needTable} name="Needed" /> : <div></div>}

      </div>
</div>
  );
}

export default App;
