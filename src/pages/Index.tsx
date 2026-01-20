import { useState } from "react";
import { FlashcardFlow } from "@/components/FlashcardFlow";
import { AssessmentTest } from "@/components/AssessmentTest";
import { Dashboard } from "@/components/Dashboard";

type AppState = "flashcards" | "assessment" | "dashboard";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("flashcards");

  return (
    <>
      {appState === "flashcards" && (
        <FlashcardFlow onComplete={() => setAppState("assessment")} />
      )}
      {appState === "assessment" && (
        <AssessmentTest onComplete={() => setAppState("dashboard")} />
      )}
      {appState === "dashboard" && <Dashboard />}
    </>
  );
};

export default Index;
