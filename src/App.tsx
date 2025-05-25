import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { NavigationGrid } from './components/NavigationGrid';
import { ContactForm } from './components/ContactForm';
import { TransitionProvider } from './context/TransitionContext';
import { VerticalReveal } from './components/ui/VerticalReveal';
import ScrollProgress from './components/ui/ScrollProgress';
import { ScrollToTop } from './components/ui/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <TransitionProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<NavigationGrid isVisible={true} />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
        </MainLayout>
        <VerticalReveal />
        <ScrollProgress />
      </TransitionProvider>
    </Router>
  );
}

export default App;