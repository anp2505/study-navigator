import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FlashcardFlowProps {
  onComplete: () => void;
}

const flashcards = [
  {
    id: 1,
    question: "Giữa ma trận AI, Web, Mobile, Data...",
    subtext: "Bạn đã thực sự biết mình thuộc về đâu chưa?",
    options: [
      { text: "Tôi vẫn đang mông lung", primary: true, cta: false },
      { text: "Tôi đã có hướng đi", primary: false, cta: false }
    ]
  },
  {
    id: 2,
    question: "GPA cao là chưa đủ.",
    subtext: "Bạn có tự tin vượt qua bài test 'Live Coding' của nhà tuyển dụng?",
    options: [
      { text: "Tôi muốn thử sức", primary: true, cta: false }
    ]
  },
  {
    id: 3,
    question: "Đừng học lan man nữa.",
    subtext: "Hãy để Study Navigator xây dựng lộ trình thực chiến cho bạn.",
    options: [
      { text: "Tạo lộ trình IT cá nhân ngay", primary: true, cta: true }
    ]
  }
];

export const FlashcardFlow = ({ onComplete }: FlashcardFlowProps) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = (isCTA?: boolean) => {
    if (isCTA) {
      onComplete();
    } else if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-3xl w-full"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="text-center space-y-6">
              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mb-8">
                {flashcards.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentCard
                        ? "w-12 bg-primary"
                        : idx < currentCard
                        ? "w-2 bg-success"
                        : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Card content */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {flashcards[currentCard].question}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {flashcards[currentCard].subtext}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-4 pt-8">
                {flashcards[currentCard].options.map((option, idx) => (
                  <Button
                    key={idx}
                    size="lg"
                    variant={option.cta ? "default" : option.primary ? "default" : "outline"}
                    className={`text-lg py-6 ${
                      option.cta
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                        : ""
                    }`}
                    onClick={() => handleNext(option.cta)}
                  >
                    {option.text}
                    {option.cta && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
