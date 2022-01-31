// src/components/CreateJob.js
import { useState } from "react";

const CreateJob = ({ contract }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // invoke the smart contract's create method
    const job = await contract.create({ task });
    console.log(job);
    setTask("");
    setLoading(false);

    // print the job to the console
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Stack Web Developer"
        value={task}
        onChange={({ target }) => setTask(target.value)}
      />
      <button disabled={loading}>Create Job</button>
    </form>
  );
};

export default CreateJob;
