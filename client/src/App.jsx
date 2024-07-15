import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import RegisterPage from "./pages/RegisterPage";
// import AboutUsPage from "./pages/AboutUsPage";
// import ServicesPage from "./pages/ServicesPage";
// import TechniciansPage from "./pages/TechniciansPage";
// import BookingsPage from "./pages/BookingsPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technicians" element={<TechniciansPage />} />
        <Route path="/bookings" element={<BookingsPage />} /> */}

      </Route>

    </Routes>

  );
}

export default App
