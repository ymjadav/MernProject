import { Link } from "react-router-dom";
import { login } from "../api/user/user";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userDetail = {};

    for (const [key, value] of formData) {
      userDetail[key] = value;
    }
    // const validation = suite({ ...form, [name]: value });
    // setResult(validation);

    await login(userDetail);
  };

  return (
    <>
      <section className="  ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-dvh lg:py-0">
          <div className="w-full bg-gray-300 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xltext-black text-center">
                Welcome Again
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    username
                  </label>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/forgetpassword"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-600 text-black "
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet-700 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log-in
                </button>
                <p className="text-sm text-black">
                  {`Don't have an account yet?`}
                  <Link
                    to="/Signup"
                    className="font-bold text-primary-600 hover:underline bold ml-2"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
