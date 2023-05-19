import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Approach from './pages/Approach';
import ChamaDetails from './pages/ChamaDetails';
import Navbar from './components/navbar/Navbar';
import ContributionsPage from './pages/ContributionsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import MeetingsPage from './pages/MeetingsPage';
import MembershipPage from './pages/MembershipPage';
import ReportsAndStatements from './pages/ReportsAndStatements';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/approach" element={<Approach />} />
                    <Route path="/chamaDetails" element={<ChamaDetails />} />
                    <Route path="/contributionsPage" element={<ContributionsPage />} />
                    <Route path="/investmentsPage" element={<InvestmentsPage />} />
                    <Route path="/meetingsPage" element={<MeetingsPage />} />
                    <Route path="/membershipPage" element={<MembershipPage />} />
                    <Route path="/reportsAndStatements" element={<ReportsAndStatements />} />
                    <Route path="/notificationsPage" element={<NotificationsPage />} />
                    <Route path="/settingsPage" element={<SettingsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
