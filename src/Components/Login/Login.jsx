import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";

const Login = () => {
  const { signIn , handlePasswordReset } = useContext(authContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const resetPassword = () => {
    const emailReset = emailRef.current.value;
    console.log("reset password is clicked" , emailReset);
    handlePasswordReset(emailReset)
    .then(()=>{
      alert('password reset success')
    })
    .catch(error =>{
      console.log(error.message)
    })
  };

  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>

        <form onSubmit={handleLogIn} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a
                  onClick={resetPassword}
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                type="submit"
                value="Submit"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Do not have an account yet?
              <Link
                to="/signup"
                className="hover:underline dark:text-violet-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
