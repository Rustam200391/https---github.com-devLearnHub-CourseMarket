import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Form } from './component/Form';
import {Login} from './pages/Login';

export default function App() {
  return (
    <>
    <Router>
        <Form />
        <Routes>
        <Route path="/pages" element={<Login/>} />
        {/* <Route path="/signup" component={Signup} /> */}
        </Routes>
    </Router>
    </>
  );
}


