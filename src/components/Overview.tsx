import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, BookOpen, Target, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const mockSkillData = [
  { skill: "Lập trình", you: 60, market: 75 },
  { skill: "Giải thuật", you: 55, market: 70 },
  { skill: "Database", you: 50, market: 68 },
  { skill: "Tiếng Anh", you: 65, market: 72 },
  { skill: "Làm việc nhóm", you: 70, market: 80 },
  { skill: "Tư duy logic", you: 58, market: 73 }
];

const suggestedCourses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    platform: "Udemy",
    level: "Cơ bản",
    progress: 65,
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "React Complete Guide",
    platform: "Coursera",
    level: "Trung cấp",
    progress: 30,
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Algorithms & Data Structures",
    platform: "edX",
    level: "Nâng cao",
    progress: 0,
    color: "bg-orange-500"
  }
];

export const Overview = () => {
  const averageScore = Math.round(mockSkillData.reduce((acc, curr) => acc + curr.you, 0) / mockSkillData.length);
  const marketAverage = Math.round(mockSkillData.reduce((acc, curr) => acc + curr.market, 0) / mockSkillData.length);
  const gap = marketAverage - averageScore;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Điểm trung bình</p>
              <p className="text-2xl font-bold">{averageScore}/100</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mục tiêu thị trường</p>
              <p className="text-2xl font-bold">{marketAverage}/100</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-500/10">
              <TrendingUp className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cần cải thiện</p>
              <p className="text-2xl font-bold">{gap} điểm</p>
            </div>
          </div>
        </Card>
      </div>


      {/* Charts Section*/}
      <Card className="p-6 shadow-elegant">
        <h2 className="text-2xl font-bold mb-6">Phân tích kỹ năng chi tiết</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Cột 1: Radar Chart*/}
          <div className="space-y-4">
            <h3 className="text-center font-medium text-muted-foreground">Tổng quan năng lực</h3>
            <div className="bg-secondary/30 rounded-2xl p-2">
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={mockSkillData.map(d => ({ skill: d.skill, "Bạn": d.you, "Thị trường": d.market }))}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Bạn" dataKey="Bạn" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.5} />
                  <Radar name="Thị trường" dataKey="Thị trường" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.5} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cột 2: Bar Chart*/}
          <div className="space-y-4">
            <h3 className="text-center font-medium text-muted-foreground">So sánh trực quan</h3>
            <div className="bg-secondary/30 rounded-2xl p-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart 
                  data={mockSkillData.map(d => ({ skill: d.skill, "Bạn": d.you, "Thị trường": d.market }))}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="skill" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "hsl(var(--background))", borderRadius: "8px", border: "1px solid hsl(var(--border))" }}
                  />
                  <Legend />
                  <Bar dataKey="Bạn" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Thị trường" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Thông báo */}
        <Card className="bg-accent/10 border-accent p-4 mt-8">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-6 w-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-muted-foreground">
                Kỹ năng của bạn đang thấp hơn {gap} điểm so với chuẩn thị trường
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed italic">
                Mức thị trường được tính dựa trên dữ liệu thu thập từ các nền tảng tuyển dụng như LinkedIn, ITViec và báo cáo thị trường việc làm IT năm 2026.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Tiếp tục học tập để lấp đầy các khoảng trống kỹ năng nhé!
              </p>
            </div>
          </div>
        </Card>
      </Card>

      {/* Suggested Courses */}
      <Card className="p-6 shadow-elegant">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Khóa học gợi ý</h2>
          </div>
          <Badge variant="secondary">Dựa trên kỹ năng của bạn</Badge>
        </div>

        <div className="space-y-4">
          {suggestedCourses.map((course) => (
            <Card key={course.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={course.color}>{course.level}</Badge>
                    <span className="text-sm text-muted-foreground">{course.platform}</span>
                  </div>
                  <h4 className="font-semibold text-lg">{course.title}</h4>
                </div>
                {course.progress > 0 ? (
                  <Button size="sm">Tiếp tục học</Button>
                ) : (
                  <Button size="sm" variant="outline">Bắt đầu</Button>
                )}
              </div>
              {course.progress > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
