import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import BookAppointment from "./components/BookAppointment";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
