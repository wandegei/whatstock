import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import Partnerships from './pages/Partnerships';
import MPFTKEmpowerment from './pages/mfptk';
import SuccessStories from './pages/SuccessStories';
import MediaCenter from './pages/MediaCenter';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
          <title>Turning Visibility Into Real Sales | B2B Growth Partners</title>

          <meta
            name="description"
            content="We help businesses grow through strategic digital marketing, real customer connections, and youth empowerment. Turn visibility into sales today."
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Optional PNG version */}
          {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      <div className="min-h-screen bg-b2b-gray flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/mpftk-empowerment" element={<MPFTKEmpowerment />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;