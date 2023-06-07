import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration/Registration.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { ResetPassword } from "./pages/ResetPwd/ResetPwd.jsx";
import { ForgotPassword } from "./pages/ForgotPwd/ForgotPwd.jsx";
import { DashBoard } from './pages/DashBoard/DashBoard.jsx';
import './App.scss'
import './assets/style/reset.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          
          {/* http://localhost:3000/:uid/:token/ переходить по этому пути */}
          <Route path="/:uid/:token/" element={<Login />} />
          <Route path="/" element={<Login />} />
          {/*using the link from the mail to the login page, specify/{uid}/{token}/ */}
          
          {/* <Route path="/resetPassword/:uid:/:token" element={<ResetPassword />} /> */}
          {/* // наверное такой путь  */}

          <Route path="/registration" element={<Registration />} />

          <Route path="/forgotPwd" element={<ForgotPassword />} />


          <Route path="/password/:uid:/:token" element={<ResetPassword />} />

          <Route path="/dashboard" element={<DashBoard />} />
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
