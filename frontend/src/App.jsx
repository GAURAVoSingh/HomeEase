import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import CustomerDashboard from './pages/CustomerDashboard.jsx';
import ProviderDashboard from './pages/ProviderDashboard.jsx';
import BookingFlow from './pages/BookingFlow.jsx';
import ProviderProfile from './pages/ProviderProfile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/provider" element={<ProviderDashboard />} />
      <Route path="/book" element={<BookingFlow />} />
      <Route path="/providers/:id" element={<ProviderProfile />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </div>
);

export default App;
