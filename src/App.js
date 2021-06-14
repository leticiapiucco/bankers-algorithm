import { useState } from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import { react } from "@babel/types";
import DataGrid from '@material-ui/core/Table';
import Tables from "./components/Tables"
import Result from "./components/Result"


const App = () => {
  const [processes, setNprocesses] = useState(0)
  const [resources, setNResources] = useState(0)
  const [allocatedTable, setAllocationTable] = useState([])
  const [maxTable, setMaxTable] = useState([])
  const [availableTable, setAvailableTable] = useState([])
  const [needTable, setNeedTable] = useState([])
  const [readyToCalculate, setReadyToCalculate] = useState(false)
  const [results, setResults] = useState([])
  
  const createTables = (input) => {
    setReadyToCalculate(false)
    setNprocesses(Number(input.processes))
    setNResources(Number(input.resources))
    setAllocationTable((input.allocation.split(/\r?\n/)).map((e) => (
      e.split(',').map(x=>+x)
    )))
    setMaxTable((input.max.split(/\r?\n/)).map((e) => (
      e.split(',').map(x=>+x)
    )))
    setAvailableTable((input.available.split(/\r?\n/)).map((e) => (
      e.split(',').map(x=>+x)
    )))
  }

  const calculateNeeded = () => {
    let newNeedTable = [...Array(processes)].map(e => Array(resources));
    for(let i=0; i < processes; i++){
      for(let j=0; j < resources; j++){
        newNeedTable[i][j] = maxTable[i][j] - allocatedTable[i][j]
      }
    }
    setNeedTable(newNeedTable)
    calculate()
  }
  const calculate = () => {
    let running = Array(processes).fill(true)
    let count = processes
    let result = []
    while(count !== 0){
      var safe = false
      for(let i = 0; i < processes; i++){
        if(running[i]){
          let executing = true
          for(let j=0; j < resources; j++){
            if(maxTable[i][j] - allocatedTable[i][j] > availableTable[j]){
              executing = false
              break
            }
            if(executing){
              result.push("Process " + i + " is executing")
              running[i] = false
              count -= 1
              safe = true
              for(let j = 0; j < resources; j++){
                availableTable[j] += availableTable[i][j]
              }
              break
            }
          }
        }
      }
      if(!safe){
        result.push("The processes are in an unsafe state.")
        break
      }
      result.push("The processes are in a safe state.")
    }
    setResults(result)
    setReadyToCalculate(true)
  }

  return (
    <body>
      <Header/>
      <div className="parent">
        <Form onAdd={createTables}/>
        <div className="wide">
          {allocatedTable.length > 0 ? <Tables table={allocatedTable} name="Allocation" /> : <div></div>}
          {maxTable.length > 0 ? <Tables table={maxTable} name="Max" /> : <div></div>}
          {availableTable.length > 0 ? <Tables table={availableTable} name="Available" /> : <div></div>}
          {needTable.length > 0 ? <Tables table={needTable} name="Needed" /> : <div></div>}
          {readyToCalculate && <Result content={results}/>}
        </div>
      </div>
    </body>
  );
}

export default App;
