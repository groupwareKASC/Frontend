import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

const Splash = React.lazy(() => import('./pages/Splash'));
const Render = React.lazy(() => import('./pages/Render'));
const Attendence = React.lazy(() => import('./pages/Attendence'));
const VariableCost = React.lazy(() => import('./pages/VariableCost'));
const SubstituteCost = React.lazy(() => import('./pages/SubstituteCost'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Render/>}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Attendence" element={<Attendence />} />
            <Route path="/VariableCost" element={<VariableCost />} />
            <Route path="/SubstituteCost" element={<SubstituteCost />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
