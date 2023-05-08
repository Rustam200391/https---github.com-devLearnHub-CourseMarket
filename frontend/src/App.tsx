import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Registration/Form.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword.jsx";
import { ForgotPassword } from "./pages/ForgotPwd/Forgotpwd.jsx"
import './App.scss'
import './assets/style/reset.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/registration" element={<Form />} />

          <Route path="/forgotpwd" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          
          {/* <Route path="/signup" component={Signup} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
