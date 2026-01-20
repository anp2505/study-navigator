import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";
import { Search, Filter } from "lucide-react";

const courses: CourseCardProps[] = [
  {
    id: 1,
    title: "Lập trình Python từ A-Z",
    description: "Khóa học toàn diện về Python, từ cơ bản đến nâng cao, bao gồm các dự án thực tế",
    platform: "Udemy",
    level: "Cơ bản",
    duration: "12 tuần",
    modules: 4,
    link: "https://udemy.com"
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Học xây dựng website từ frontend đến backend với HTML, CSS, JavaScript, React và Node.js",
    platform: "Coursera",
    level: "Trung cấp",
    duration: "16 tuần",
    modules: 5,
    link: "https://coursera.org"
  },
  {
    id: 3,
    title: "Machine Learning chuyên sâu",
    description: "Khám phá thuật toán ML, neural networks và deep learning với TensorFlow",
    platform: "edX",
    level: "Nâng cao",
    duration: "20 tuần",
    modules: 4,
    link: "https://edx.org"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Nguyên tắc thiết kế giao diện và trải nghiệm người dùng",
    platform: "Interaction Design Foundation",
    level: "Cơ bản",
    duration: "8 tuần",
    modules: 3
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description: "Nắm vững cấu trúc dữ liệu và giải thuật, chuẩn bị phỏng vấn tech",
    platform: "LeetCode",
    level: "Trung cấp",
    duration: "14 tuần",
    modules: 5
  },
  {
    id: 6,
    title: "Cloud Architecture với AWS",
    description: "Thiết kế và triển khai ứng dụng trên AWS cloud",
    platform: "AWS Training",
    level: "Nâng cao",
    duration: "10 tuần",
    modules: 4
  }
];

export const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("Tất cả");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "Tất cả" || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Thư viện tài nguyên</h2>
        <p className="text-muted-foreground text-lg">
          Khám phá các khóa học và dự án phù hợp với lộ trình của bạn
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="p-6 shadow-elegant">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm khóa học..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div className="flex gap-2 overflow-x-auto">
              {["Tất cả", "Cơ bản", "Trung cấp", "Nâng cao"].map((level) => (
                <Button
                  key={level}
                  variant={levelFilter === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLevelFilter(level)}
                  className="whitespace-nowrap"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Tìm thấy <strong>{filteredCourses.length}</strong> khóa học
      </p>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* Empty state */}
      {filteredCourses.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">Không tìm thấy khóa học phù hợp</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setLevelFilter("Tất cả");
            }}
          >
            Xóa bộ lọc
          </Button>
        </Card>
      )}
    </div>
  );
};
