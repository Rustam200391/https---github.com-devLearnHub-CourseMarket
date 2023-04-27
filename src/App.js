import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from "./component/Form";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" component={Signup} /> */}
>>>>>>> 54e5f737fe58f2a8904eb9e876e9f1cf59ad8b94
        </Routes>
      </Router>
    </>
  );
}
