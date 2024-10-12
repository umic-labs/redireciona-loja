import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function RedirectToExternalURL() {
  useEffect(() => {
    window.location.href = 'https://umicbrasil.transforme.tech/evento/comic25';
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToExternalURL />} />
      </Routes>
    </Router>
  );
}

export default App;
