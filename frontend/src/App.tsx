import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Registration/Form.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Verification } from "./pages/Verification.jsx";
import './App.scss'
import './assets/style/reset.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/registration" element={<Form />} />

          
          <Route path="/auth" element={<Verification />} />
          {/* <Route path="/signup" component={Signup} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
