import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Featured = () => {
  const [job, setJobs] = useState([]);

  useEffect(() => {
    fetch(`jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl">Featured Jobs</h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future{" "}
      </p>

      <div className="md:grid grid-cols-2">
        {job.map((jb) => (
          <Card key={jb.id} jb={jb}></Card>
        ))}
      </div>

    </div>
  );
};

export default Featured;
