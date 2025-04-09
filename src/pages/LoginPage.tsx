import AuthForm from "../components/AuthForm";
import { Header } from "../components/Header";

const LoginPage = () => {
  return (
    <div className="w-full bg-linear-127 from-[#00A7B3] to-[#002847] relative">
      <Header pageName="login" />

      <div className="h-[960px] object-cover">
        <img src="/src/images/humanFace.png" />
      </div>
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 z-10">
        <AuthForm pageName="login" />
      </div>
    </div>
  );
};

export default LoginPage;
