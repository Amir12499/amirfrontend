// import React from 'react'
// import Header from './components/Header'
// import ContentSection from './components/ContentSection'
// import ContentSectionSecond from './components/ContentSectionSecond'
// import Services from './components/Services'
// import HiringPartners from './components/HiringPartners'
// import WorkDetails from './components/WorkDetails'
// import ComponentProperties from './components/ComponentProperties'


// function page() {
//   return (
//     <>
//     {/* <div> <h1>this page for about us here we design about us page </h1></div> */}
//     <Header/>
//     <ContentSection/>
//     <ContentSectionSecond/>
//     <Services/>
//     <HiringPartners/>
//     <WorkDetails/>
//     <ComponentProperties/>
   
//     </>
//   )
// }

// export default page
"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import ContentSectionSecond from './components/ContentSectionSecond';
import Services from './components/Services';
import HiringPartners from './components/HiringPartners';
import WorkDetails from './components/WorkDetails';
import ComponentProperties from './components/ComponentProperties';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ContentSection />} />
        <Route path="/section2" element={<ContentSectionSecond />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hiring-partners" element={<HiringPartners />} />
        <Route path="/work-details" element={<WorkDetails />} />
        <Route path="/component-properties" element={<ComponentProperties />} />
      </Routes>
    </Router>
  );
}

export default App;
