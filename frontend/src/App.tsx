import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/auth/Registration/Registration.jsx";
import { Login } from "./pages/auth/Login/Login.jsx";
import { ResetPassword } from "./pages/auth/ResetPwd/ResetPwd.jsx";
import { ForgotPassword } from "./pages/auth/ForgotPwd/ForgotPwd.jsx";
import { DashBoard } from './pages/DashBoard/DashBoard.jsx';
import {MainPage} from './pages/DashBoard/Main/MainPage.jsx';
import {MailReset} from './pages/auth/MailReset/MailReset.jsx'
import './assets/style/reset.css';
import './App.scss';


function App() {

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/:uid/:token/" element={<Login />} />
          {/* логинизация по ссылке из почты */}
          
          <Route path="/" element={<Login />} />
          {/*стартовая страница */}
          
          <Route path="/password/reset/:uid/:token" element={<ResetPassword />} />
          {/* // наверное такой путь  */}

          <Route path="/registration" element={<Registration />} />

          <Route path="/forgotPwd" element={<ForgotPassword />} />
          {/* если забыл пароль */}

          <Route path="/password/:uid/:token" element={<ResetPassword />} />
          {/* переходим по ссылке из почты с токеном и паролем для сброса */}

          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/main" element={<MainPage />} />
          {/* добро поджаловать к нам на огонек */}

          <Route path="/mailreset" element={< MailReset />} />
          {/* вам на почту пришла ссылка для сброса пароля */}
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
