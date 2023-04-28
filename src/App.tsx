import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form.jsx";
import { Login } from "./pages/Login.jsx";
import './App.css'


function App() {

  return (
    <>
    <div>lalal</div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />

          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/signup" component={Signup} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
