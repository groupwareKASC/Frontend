import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

const Splash = React.lazy(() => import('./pages/Splash'));
const Attendence = React.lazy(() => import('./pages/Attendence'));
const Render = React.lazy(() => import('./pages/Render'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Render/>}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Attendence" element={<Attendence />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
