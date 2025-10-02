// App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { EntryFlow } from "./pages/EntryFlow"; 
import { Attendence } from "./pages/Attendence";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <EntryFlow />
            </motion.div>
          }
        />
        <Route
          path="/Attendence"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Attendence />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
