// src/components/Job.js
import { useState } from "react";

export function Job({ contract, id, task, done }) {
  const [checked, setChecked] = useState(done);

  const complete = ({ target }) => {
    setChecked(target.checked);
    contract.update({ id, updates: { task, done: target.checked } });
  };

  const del = () => {
    // on clicking the delete button invoke the del method on
    // the smart contract
    contract.del({ id });
  };

  return (
    <>
      <p>
        <input type="checkbox" checked={checked} onChange={complete} />
        {task}
      </p>
      <button onClick={del}>delete</button>
    </>
  );
}
