import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

export interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  platform: string;
  level: "Cơ bản" | "Trung cấp" | "Nâng cao";
  duration: string;
  modules: number;
  link?: string;
}

const levelColors = {
  "Cơ bản": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Trung cấp": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Nâng cao": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
};

export const CourseCard = ({ title, description, platform, level, duration, modules, link }: CourseCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <Badge className={levelColors[level]}>{level}</Badge>
          <span className="text-sm text-muted-foreground">{platform}</span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{modules} mục tiêu</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button className="flex-1" asChild={!!link}>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Học ngay
              </a>
            ) : (
              <>Học ngay</>
            )}
          </Button>
          <Button variant="outline" asChild={!!link}>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Chi tiết <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            ) : (
              <>Chi tiết <ArrowRight className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};
