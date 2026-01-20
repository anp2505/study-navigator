import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { ArrowRight, TrendingUp } from "lucide-react";
interface AssessmentTestProps {
  onComplete: () => void;
}
const itCareers = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "AI/Data Engineer", "Cyber Security", "DevOps Engineer", "Tester/QA"];
const skills = [{
  name: "Lập trình",
  key: "programming"
}, {
  name: "Giải thuật",
  key: "algorithms"
}, {
  name: "Database",
  key: "database"
}, {
  name: "Tiếng Anh",
  key: "english"
}, {
  name: "Làm việc nhóm",
  key: "teamwork"
}, {
  name: "Tư duy logic",
  key: "logic"
}];
export const AssessmentTest = ({
  onComplete
}: AssessmentTestProps) => {
  const [career, setCareer] = useState("");
  const [skillLevels, setSkillLevels] = useState<Record<string, number>>({
    programming: 50,
    algorithms: 50,
    database: 50,
    english: 50,
    teamwork: 50,
    logic: 50
  });
  const [showResults, setShowResults] = useState(false);
  const marketStandard: Record<string, number> = {
    programming: 75,
    algorithms: 70,
    database: 68,
    english: 72,
    teamwork: 80,
    logic: 73
  };
  const handleSubmit = () => {
    setShowResults(true);
  };
  const chartData = skills.map(skill => ({
    skill: skill.name,
    "Bạn": skillLevels[skill.key],
    "Thị trường": marketStandard[skill.key]
  }));
  const averageGap = Math.round(skills.reduce((acc, skill) => acc + (marketStandard[skill.key] - skillLevels[skill.key]), 0) / skills.length);
  return <div className="min-h-screen gradient-hero p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <Card className="p-6 md:p-8 shadow-elegant">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Đánh giá kỹ năng của bạn
                </h2>
                <p className="text-muted-foreground text-lg">
                  Hãy đánh giá trung thực để chúng tôi xây dựng lộ trình phù hợp nhất
                </p>
              </div>

              {/* Career selection */}
              <div className="space-y-3">
                <Label htmlFor="career" className="text-base font-semibold">
                  Nghề nghiệp mục tiêu
                </Label>
                <Select value={career} onValueChange={setCareer}>
                  <SelectTrigger id="career" className="w-full">
                    <SelectValue placeholder="Chọn nghề bạn muốn theo đuổi" />
                  </SelectTrigger>
                  <SelectContent>
                    {itCareers.map(c => <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* Skills assessment */}
              {!showResults ? <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Đánh giá kỹ năng hiện tại (0-100)</h3>
                  {skills.map(skill => <div key={skill.key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label className="text-base">{skill.name}</Label>
                        <span className="text-primary font-bold text-lg">
                          {skillLevels[skill.key]}
                        </span>
                      </div>
                      <Slider value={[skillLevels[skill.key]]} onValueChange={value => setSkillLevels({
                  ...skillLevels,
                  [skill.key]: value[0]
                })} max={100} step={1} className="w-full" />
                    </div>)}

                  <Button onClick={handleSubmit} disabled={!career} size="lg" className="w-full mt-6">
                    Xem kết quả đánh giá
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div> : <div className="space-y-6">
                  {/* Radar chart */}
                  <div className="bg-secondary/30 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      So sánh với chuẩn thị trường
                    </h3>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart data={chartData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis dataKey="skill" tick={{
                      fill: "hsl(var(--foreground))",
                      fontSize: 12
                    }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar name="Bạn" dataKey="Bạn" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.5} />
                        <Radar name="Thị trường" dataKey="Thị trường" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.5} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Gap alert */}
                  <Card className="bg-accent/10 border-accent p-6">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-muted-foreground">
                          Kỹ năng của bạn đang thấp hơn {averageGap}% so với yêu cầu thị trường
                        </h4>
                        <p className="text-lg text-muted-foreground">
                          Bạn có muốn cải thiện điều này không?
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* CTA */}
                  <Button onClick={onComplete} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                    Đăng ký lộ trình ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>;
};