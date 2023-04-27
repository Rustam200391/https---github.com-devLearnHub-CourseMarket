import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from "./pages/Form";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" component={Signup} /> */}
        </Routes>
      </Router>
    </>
  );
}
