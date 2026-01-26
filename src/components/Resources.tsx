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
    title: "HTML, CSS, and Javascript for Web Developers",
    description:
      "Khóa học nền tảng về HTML, CSS và JavaScript, phù hợp cho người mới bắt đầu học web.",
    platform: "Coursera",
    level: "Cơ bản",
    duration: "5 tuần",
    modules: 4,
    // Coursera: học FREE dạng Audit
    link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
  },
   {
    id: 2,
    title: "JavaScript Basics for Beginners",
    description:
      "Học JavaScript từ con số 0: biến, hàm, điều kiện, vòng lặp.",
    platform: "Udemy (Free)",
    level: "Cơ bản",
    duration: "3 giờ",
    modules: 6,
    link: "https://www.udemy.com/course/javascript-basics-for-beginners/",
  },
  {
    id: 3,
    title: "Build Responsive Websites with HTML & CSS",
    description:
      "Xây dựng website responsive, chuẩn mobile-first với HTML & CSS.",
    platform: "Udemy (Free)",
    level: "Trung cấp",
    duration: "4 giờ",
    modules: 7,
    link: "https://www.udemy.com/course/build-responsive-websites-html-css/",
  },
  {
    id: 4,
    title: "Introduction to Backend Development",
    description:
      "Tìm hiểu backend, server, API và cơ sở dữ liệu cho web developer.",
    platform: "Coursera",
    level: "Nâng cao",
    duration: "6 tuần",
    modules: 8,
    link: "https://www.coursera.org/learn/introduction-to-backend-development",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description: "Học cách xây dựng website responsive với HTML, CSS và Flexbox.",
    platform: "freeCodeCamp",
    level: "Cơ bản",
    duration: "4 tuần",
    modules: 9,
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
  },
  {
    id: 6,
    title: "JavaScript Algorithms and Data Structures",
    description: "Nắm vững JavaScript thông qua các bài toán và dự án thực hành.",
    platform: "freeCodeCamp",
    level: "Trung cấp",
    duration: "6 tuần",
    modules: 10,
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
  },
  {
    id: 7,
    title: "Version Control with Git",
    description: "Học Git từ cơ bản đến nâng cao: commit, branch, merge, GitHub.",
    platform: "Coursera",
    level: "Cơ bản",
    duration: "4 tuần",
    modules: 11,
    link: "https://www.coursera.org/learn/version-control-with-git"
  },
  {
    id: 8,
    title: "Introduction to Front-End Development",
    description: "Tổng quan Frontend: HTML, CSS, JavaScript và tư duy UI.",
    platform: "Coursera",
    level: "Cơ bản",
    duration: "5 tuần",
    modules: 12,
    link: "https://www.coursera.org/learn/introduction-to-front-end-development"
  },
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
