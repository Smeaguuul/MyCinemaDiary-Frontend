import { login } from "../../services/AuthService";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/purple-background.jpg')" }}
    >
      <LoginForm onLogin={async (username: string, password: string) => await login(username, password)}/>
    </div>
  );
};

export default LoginPage;
