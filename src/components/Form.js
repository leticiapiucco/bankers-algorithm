import { useState
 } from "react"
const Form = ({ onAdd }) => {
    const [process, setNProcess] = useState('')
    const [resources, setNResources] = useState('')
    const [allocation, setAllocation] = useState('')
    const [max, setMax] = useState('')
    const [available, setAvailable] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!process){
            alert('Please add the number of processes')
            return
        }
        if(!resources){
            alert('Please add the number of processes')
            return
        }
        if(!allocation){
            alert('Please add the number of processes')
            return
        }
        if(!max){
            alert('Please add the number of processes')
            return
        }
        if(!available){
            alert('Please add the number of processes')
            return
        }
        onAdd({process, resources, allocation, max, available})
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Number of Process</label>
                <input type='text'
                value={process} onChange={(e) =>
                    setNProcess(e.target.value )
                }
                />
            </div>

            <div>
                <label>Number of Resources</label>
                <input type='text'
                value={resources} onChange={(e) =>
                    setNResources(e.target.value )
                }                
                />
            </div>

            <div>
                <label>Allocation (separate resources by comma and proccess by line)</label>
                <textarea type='text'
                placeholder = '1,0,0 \n 1,0,0'
                value={allocation} onChange={(e) =>
                    setAllocation(e.target.value )
                }                
                />
            </div>

            <div>
                <label>Max (separate resources by comma and proccess by line)</label>
                <textarea type='text' 
                placeholder= '1,0,0 \n 1,0,0'
                value={max} onChange={(e) =>
                    setMax(e.target.value)
                }
                />
            </div>

            <div>
                <label>Available (separate by comma)</label>
                <textarea type='text'
                placeholders = "1, 2, 3" 
                value={available} onChange={(e) =>
                    setAvailable(e.target.value )
                }
                />
            </div>

            <input type='submit' value='Save'/>
        </form>
    )
}

export default Form
