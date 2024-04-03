import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdSubtitles } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { setLs } from "../../Utility";


const ViewDetails = () => {
  const jobsData = useLoaderData();
  const jobId = useParams();
  const singleData = jobsData.find(
    (findId) => findId.id === parseInt(jobId.id)
  );
  console.log(singleData);
  const {
    id,
    job_description,
    job_responsibility,
    experiences,
    educational_requirements,
    job_title,
    salary,
    contact_information,
  } = singleData;

  const handleAppliedJob = (id) => {
    console.log('applied clicked' , id)
    setLs(id)
  };





  return (
    <div>
      <h2 className="text-3xl text-amber-400 text-center">Job Details</h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <p>Job Description:{job_description} </p>
          <p>Job Responsibility : {job_responsibility}</p>
          <p>Educational Requirements: {educational_requirements}</p>
          <p>Experience: {experiences}</p>
        </div>
        <div className="col-span-4">
          <h2>Job Details</h2>
          <hr />
          <h2 className="flex items-center">
            {" "}
            <HiOutlineCurrencyDollar />
            Salary:{salary}
          </h2>
          <h2 className="flex">
            <MdSubtitles />
            Job Title:{job_title}
          </h2>
          <h2>Contact Information</h2>
          <hr />
          <p>Phone: {contact_information.phone}</p>
          <p>Email: {contact_information.email}</p>
          <p>Address: {contact_information.address}</p>
          <button
            onClick={() => handleAppliedJob(`${id}`)}
            className="btn btn-primary w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
