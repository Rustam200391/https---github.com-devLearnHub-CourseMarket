import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration/Registration.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { ResetPassword } from "./pages/ResetPwd/ResetPwd.jsx";
import { ForgotPassword } from "./pages/ForgotPwd/ForgotPwd.jsx";
import { DashBoard } from './pages/DashBoard/DashBoard.jsx';
import './App.scss'
import {MailReset} from './pages/MailReset/MailReset.jsx'
import './assets/style/reset.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/:uid/:token/" element={<Login />} />
          {/* логинизация по ссылке из почты */}
          
          <Route path="/" element={<Login />} />
          {/*стартовая страница */}
          
          <Route path="/password/reset/:uid:/:token/" element={<ResetPassword />} />
          {/* // наверное такой путь  */}

          <Route path="/registration" element={<Registration />} />

          <Route path="/forgotPwd" element={<ForgotPassword />} />
          {/* если забыл пароль */}

          <Route path="/password/:uid:/:token" element={<ResetPassword />} />
          {/* переходим по ссылке из почты с токеном и паролем для сброса */}

          <Route path="/dashboard" element={<DashBoard />} />
          {/* добро поджаловать к нам на огонек */}

          <Route path="/mailreset" element={< MailReset />} />
          {/* вам на почту пришла ссылка для сброса пароля */}
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
