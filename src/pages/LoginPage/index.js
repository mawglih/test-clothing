import SignIn from "../../components/Auth/signin"
import SignUp from "../../components/Auth/signup"
import '../../App.scss';

const LoginPage = () => {
  const handleLogin = data => {
    console.log("Login succeeded", data);
  }
  return (
    <div className="container-login">
      <SignIn sendCred={data => handleLogin(data)}/>
      <SignUp />
    </div>
  )
}

export default LoginPage;
