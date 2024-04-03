import { Link, NavLink } from "react-router-dom";
import "./Header";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Login/AuthProvider";

const Header = () => {
  const {user , logOut} = useContext(authContext);

  const handleLogOut = ()=>{
    logOut()
    .then(alert('sign out success full'))
    .catch(error =>console.log(error.message));
  }

  const menu = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/appliedjob" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>Applied job</NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>sign up</NavLink>
      </li>
      <li>
        <NavLink to="/order" className={({isActive})=> isActive ? 'text-green-600 underline font-bold' : ''}>order</NavLink>
      </li>
    </>
  );

  const [theme , setTheme] = useState('light');
  
  useEffect(()=>{
    localStorage.setItem('theme' , theme);
    const lsTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme' , lsTheme);
  },[theme])

const handleTheme = (event)=>{
  if(event.target.checked){
    setTheme('dark')
  }
  else{
    setTheme('light');
  }
}



  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Career Hub</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">{menu}</ul>
        </div>

        <div className="navbar-end">
          {
            user ? <><span>{user.email}</span><Link onClick={handleLogOut} className="btn">SignOut</Link></> : <Link to='/login' className="btn">Login</Link>
          }
          
          
        </div>
        {/* Theme controller */}
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handleTheme}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
