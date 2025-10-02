import React, { useState } from "react";
import { StartModal } from "../components/StartModal/StartModal";
import { Splash } from "./Splash";

export const EntryFlow: React.FC = () => {
  const [phase, setPhase] = useState<"modal" | "splash">("modal");

  return (
    <>
      {phase === "modal" && (
        <StartModal
          duration={15000}        
          onClose={() => setPhase("splash")} 
        />
      )}
      {phase === "splash" && <Splash />} 
    </>
  );
};