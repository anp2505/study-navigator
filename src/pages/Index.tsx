import { useState } from "react";
import { FlashcardFlow } from "@/components/FlashcardFlow";
import { AssessmentTest } from "@/components/AssessmentTest";
import { Dashboard } from "@/components/Dashboard";

type AppState = "flashcards" | "assessment" | "dashboard";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("flashcards");
  const [assessmentResults, setAssessmentResults] = useState(null);
  return (
    <>
      {appState === "flashcards" && (
        <FlashcardFlow onComplete={() => setAppState("assessment")} />
      )}
      {appState === "assessment" && (
        <AssessmentTest onComplete={(results) => {
          setAssessmentResults(results); 
          setAppState("dashboard");
        }} />
      )}
      {appState === "dashboard" && (
        <Dashboard skillData={assessmentResults} />
      )}
    </>
  );
};

export default Index;
