import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


interface Props {
  onLogin: (username: string, password: string) => void;
}

function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onLogin(username, password)
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-purple-700/20 backdrop-filter backdrop-blur-sm rounded-2xl p-10 md:p-16 lg:p-20 w-80 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-20"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
        Login
      </h2>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-base md:text-lg lg:text-xl font-medium text-white"
        >
          Username
        </label>
        <div className="relative">
          <FaUser className="absolute left-2 top-2 text-white" size={25} />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="block w-full p-2 pl-10 text-base md:text-lg lg:text-xl text-white rounded-lg shadow-sm border-white focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-base md:text-lg lg:text-xl font-medium text-white"
        >
          Password
        </label>
        <div className="relative">
          <FaLock className="absolute left-2 top-2 text-white" size={25} />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full p-2 pl-10 text-base md:text-lg lg:text-xl text-white rounded-lg shadow-sm border-white focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base md:text-lg lg:text-xl px-5 py-2.5 text-center"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
