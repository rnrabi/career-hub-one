import { useEffect, useState } from "react";
import { getLs } from "../../Utility";
import { useLoaderData } from "react-router-dom";
import AppliedJobSingle from "../AppliedJobSingle/AppliedJobSingle";

const AppliedJob = () => {
  const [selectJob, setSelectJob] = useState([]);
  const appliedData = useLoaderData();
  console.log(appliedData);

  useEffect(() => {
    const lsId = getLs();
    const selectApplied = appliedData.filter((app) =>
      lsId.includes(JSON.stringify(app.id))
    );
    setSelectJob(selectApplied);
    // console.log(appliedData , lsId, selectApplied);
  }, []);
  console.log(selectJob);

  return (
    <div>
      <h2>This is applied jobs</h2>
      {
        selectJob.map(job =><AppliedJobSingle
        key={job.id}
        job={job}
        ></AppliedJobSingle>)
      }
    </div>
  );
};

export default AppliedJob;
