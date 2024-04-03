import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ jb }) => {
  // console.log(jb);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jb;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="btn btn-outline mr-2">{remote_or_onsite}</button>
            <button className="btn btn-outline">{job_type}</button>
          </div>
          <div className="flex justify-between">
            <h2 className="flex gap-2 items-center">
              {" "}
              <IoLocationOutline /> {location}
            </h2>
            <h2 className="flex gap-2 items-center">
              {" "}
              <HiOutlineCurrencyDollar /> Salary:{salary}
            </h2>
          </div>
          <div className="card-actions">
            <Link to={`/viewDetails/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  jb:PropTypes.object.isRequired,
}

export default Card;
