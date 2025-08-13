import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, type ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import Render from "./pages/Render";

const Splash = lazy(() => import("./pages/Splash"));
const Attendence = lazy(() => import("./pages/Attendence"));
// const VariableCost = lazy(() => import("./pages/VariableCost"));
// const SubstituteCost = lazy(() => import("./pages/SubstituteCost"));

export default function App(): ReactElement {
  const location = useLocation(); 
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Render />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Splash />} />
          <Route path="/Attendence" element={<Attendence />} />
          {/* <Route path="/VariableCost" element={<VariableCost />} />
          <Route path="/SubstituteCost" element={<SubstituteCost />} /> */}
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
