import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Route,
  BookOpen,
  Users,
  Bot,
  CheckCircle2,
  Circle,
  Mail,
  MessageCircle,
  ExternalLink,
  Send,
  UserCircle,
  ChevronDown
} from "lucide-react";
import { Overview } from "./Overview";
import { Resources } from "./Resources";
import { Profile } from "./Profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const roadmapSteps = [
  { id: 1, title: "Cơ bản HTML/CSS", status: "completed", duration: "2 tuần" },
  { id: 2, title: "JavaScript Fundamentals", status: "in-progress", duration: "3 tuần" },
  { id: 3, title: "React cơ bản", status: "upcoming", duration: "4 tuần" },
  { id: 4, title: "TypeScript & Modern React", status: "upcoming", duration: "3 tuần" },
  { id: 5, title: "Backend với Node.js", status: "upcoming", duration: "4 tuần" },
  { id: 6, title: "Database & APIs", status: "upcoming", duration: "3 tuần" },
  { id: 7, title: "Dự án thực tế", status: "upcoming", duration: "6 tuần" }
];

const communities = [
  {
    id: 1,
    name: "Frontend Việt Nam",
    members: 1250,
    description: "Cộng đồng học React, Vue và các công nghệ Frontend",
    messenger: "https://m.me/frontend-vn",
    discord: "https://discord.gg/frontend-vn"
  },
  {
    id: 2,
    name: "Backend & DevOps",
    members: 890,
    description: "Học Node.js, Python, Docker và CI/CD",
    messenger: "https://m.me/backend-devops",
    email: "admin@backend.vn"
  },
  {
    id: 3,
    name: "AI & Machine Learning",
    members: 670,
    description: "Cộng đồng AI, Data Science và ML",
    discord: "https://discord.gg/ai-ml-vn",
    email: "admin@aiml.vn"
  }
];

interface DashboardProps {
  skillData?: any; 
}

export const Dashboard = ({ skillData }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Chào bạn, tôi là trợ lý AI. Bạn cần giúp gì về lộ trình học không?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages([...chatMessages, { role: "user", content: inputMessage }]);
    setInputMessage("");
    // Placeholder for AI response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { role: "assistant", content: "Tính năng AI đang được phát triển. API sẽ được tích hợp sau." }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <div className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="Study Navigator" className="h-28 w-auto object-contain" />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("overview")}
              >
                <Home className="h-4 w-4 mr-2" />
                Tổng quan
              </Button>
              <Button
                variant={activeTab === "roadmap" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("roadmap")}
              >
                <Route className="h-4 w-4 mr-2" />
                Lộ trình
              </Button>
              <Button
                variant={activeTab === "resources" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("resources")}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Tài nguyên
              </Button>
              <Button
                variant={activeTab === "community" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("community")}
              >
                <Users className="h-4 w-4 mr-2" />
                Cộng đồng
              </Button>
              <Button
                variant={activeTab === "ai" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("ai")}
              >
                <Bot className="h-4 w-4 mr-2" />
                AI Mentor
              </Button>
            </nav>

            {/* User menu */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5" />
                    <span className="hidden md:inline">Học viên</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab("profile")}>
                    <UserCircle className="mr-2 h-4 w-4" />
                    Thông tin cá nhân
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex gap-1 mt-4 overflow-x-auto pb-2">
            <Button
              variant={activeTab === "overview" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("overview")}
            >
              <Home className="h-4 w-4 mr-1" />
              Tổng quan
            </Button>
            <Button
              variant={activeTab === "roadmap" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("roadmap")}
            >
              <Route className="h-4 w-4 mr-1" />
              Lộ trình
            </Button>
            <Button
              variant={activeTab === "resources" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("resources")}
            >
              <BookOpen className="h-4 w-4 mr-1" />
              Tài nguyên
            </Button>
            <Button
              variant={activeTab === "community" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("community")}
            >
              <Users className="h-4 w-4 mr-1" />
              Cộng đồng
            </Button>
            <Button
              variant={activeTab === "ai" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("ai")}
            >
              <Bot className="h-4 w-4 mr-1" />
              AI
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Overview */}
        {activeTab === "overview" && <Overview skillData={skillData} />}

        {/* Profile */}
        {activeTab === "profile" && <Profile />}

        {/* Roadmap */}
        {activeTab === "roadmap" && (
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant">
              <h2 className="text-2xl font-bold mb-2">Lộ trình của tôi</h2>
              <p className="text-muted-foreground mb-6">
                Fullstack Developer • 25 tuần • Cập nhật hàng tuần
              </p>

              <div className="space-y-4">
                {roadmapSteps.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      {step.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                      ) : step.status === "in-progress" ? (
                        <Circle className="h-6 w-6 text-primary flex-shrink-0 fill-primary" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted flex-shrink-0" />
                      )}
                      {index < roadmapSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <Card className={`flex-1 p-4 ${
                      step.status === "in-progress" ? "border-primary shadow-sm" : ""
                    }`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">Thời lượng: {step.duration}</p>
                        </div>
                        <Badge variant={
                          step.status === "completed" ? "default" :
                          step.status === "in-progress" ? "default" : "secondary"
                        }>
                          {step.status === "completed" ? "Hoàn thành" :
                           step.status === "in-progress" ? "Đang học" : "Sắp tới"}
                        </Badge>
                      </div>
                      {step.status === "in-progress" && (
                        <Button className="mt-4" size="sm">Tiếp tục học</Button>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Community */}
        {activeTab === "community" && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {communities.map((community) => (
                <Card key={community.id} className="p-6 shadow-elegant">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {community.description}
                      </p>
                      <Badge variant="secondary">{community.members} thành viên</Badge>
                    </div>

                    <div className="space-y-2 pt-2">
                      {community.messenger && (
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href={community.messenger} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Chat qua Messenger
                            <ExternalLink className="h-3 w-3 ml-auto" />
                          </a>
                        </Button>
                      )}
                      {community.discord && (
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href={community.discord} target="_blank" rel="noopener noreferrer">
                            <Users className="h-4 w-4 mr-2" />
                            Tham gia Discord
                            <ExternalLink className="h-3 w-3 ml-auto" />
                          </a>
                        </Button>
                      )}
                      {community.email && (
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href={`mailto:${community.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Gửi Email Admin
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === "resources" && <Resources />}

        {/* AI Mentor */}
        {activeTab === "ai" && (
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AI Mentor</h2>
                  <p className="text-sm text-muted-foreground">
                    Trợ lý định hướng & hỗ trợ học tập
                  </p>
                </div>
              </div>
        
              {/* Chat area */}
              <ScrollArea className="h-[420px] rounded-2xl border bg-muted/20 p-4">
                <div className="space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-end gap-2 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* AI avatar */}
                      {msg.role === "assistant" && (
                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                          AI
                        </div>
                      )}
        
                      {/* Bubble */}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card"
                        }`}
                      >
                        {msg.content}
                      </div>
        
                      {/* User avatar */}
                      {msg.role === "user" && (
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <UserCircle className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  ))}
        
                  {/* Fake typing indicator */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                    <span className="ml-1">AI đang suy nghĩ...</span>
                  </div>
                </div>
              </ScrollArea>
        
              {/* Input */}
              <div className="mt-4 flex items-center gap-2">
                <Input
                  className="rounded-full"
                  placeholder="Hỏi AI về lộ trình học, kỹ năng, tài nguyên..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  className="rounded-full px-4"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
        
              {/* Hint */}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * AI Mentor đang ở chế độ demo. API sẽ được tích hợp sau.
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
