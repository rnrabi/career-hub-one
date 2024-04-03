import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AppliedJobSingle = ({ job }) => {
  console.log(job);
  const { id, logo, job_title, company_name, location, salary } = job;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex gap-5">
            <div>
              <h1 className="text-5xl font-bold">{job_title}</h1>
              <p className="py-6">{company_name}</p>
              <div className="flex justify-between">
                <h2 className="flex gap-2 items-center">
                  <IoLocationOutline /> {location}
                </h2>
                <h2 className="flex gap-2 items-center">
                  <HiOutlineCurrencyDollar /> Salary:{salary}
                </h2>
              </div>
            </div>
            <div>
             <Link to={`/viewDetails/${id}`}> 
             <button className="btn btn-primary">View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AppliedJobSingle.propTypes = {
    job:PropTypes.object.isRequired,
}

export default AppliedJobSingle;
