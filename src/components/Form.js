import { useState } from "react";

const Form = ({ onAdd }) => {
  const [processes, setNProcesses] = useState("");
  const [resources, setNResources] = useState("");
  const [allocation, setAllocation] = useState("");
  const [max, setMax] = useState("");
  const [available, setAvailable] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!processes) {
      alert("Please add the number of processes");
      return;
    }
    if (!resources) {
      alert("Please add the number of resources");
      return;
    }
    if (!allocation) {
      alert("Please add the allocation table");
      return;
    }
    if (!max) {
      alert("Please add the max talbe");
      return;
    }
    if (!available) {
      alert("Please add the availability of resources");
      return;
    }
    onAdd({ processes, resources, allocation, max, available });
  };
  return (
    <form onSubmit={onSubmit} className="narrow">
      <div className="form-control">
        <label>Number of Processes</label>
        <input
          type="text"
          placeholder="1"
          value={processes}
          onChange={(e) => setNProcesses(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Number of Resources</label>
        <input
          type="text"
          placeholder="3"
          value={resources}
          onChange={(e) => setNResources(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Allocation</label>
        <textarea
          type="text"
          placeholder="1, 0, 1"
          value={allocation}
          onChange={(e) => setAllocation(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Max</label>
        <textarea
          type="text"
          placeholder="1, 0, 0"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Available</label>
        <textarea
          type="text"
          placeholder="1, 2, 0"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
      </div>

      <input type="submit" value="Save" />
    </form>
  );
};

export default Form;
