
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
    BookOpen,
    Bot,
    ChevronDown,
    Home,
    LogOut,
    Menu,
    Route,
    UserCircle,
    Users
} from "lucide-react";
import { useState } from "react";

interface DashboardNavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const DashboardNavbar = ({ activeTab, setActiveTab }: DashboardNavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: "overview", label: "Tổng quan", icon: Home },
        { id: "roadmap", label: "Lộ trình", icon: Route },
        { id: "resources", label: "Tài nguyên", icon: BookOpen },
        { id: "community", label: "Cộng đồng", icon: Users },
        { id: "ai", label: "AI Mentor", icon: Bot },
    ];

    const handleNavClick = (id: string) => {
        setActiveTab(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActiveTab("overview")}>
                        <img src="/logo.png" alt="Study Navigator" className="h-10 w-auto object-contain transition-transform hover:scale-105" />

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 bg-secondary/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleNavClick(item.id)}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full transition-all duration-300 font-medium",
                                        isActive
                                            ? "bg-background text-primary shadow-sm"
                                            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                                    )}
                                >
                                    <Icon className={cn("w-4 h-4 mr-2 transition-colors", isActive ? "text-primary" : "text-muted-foreground")} />
                                    {item.label}
                                </Button>
                            );
                        })}
                    </nav>

                    {/* User Profile & Mobile Toggle */}
                    <div className="flex items-center gap-2">

                        {/* User Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2 rounded-full px-2 hover:bg-secondary/80 transition-colors border border-transparent hover:border-border">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-primary-foreground shadow-sm">
                                        <UserCircle className="h-5 w-5" />
                                    </div>
                                    <span className="hidden lg:inline text-sm font-medium">Học viên</span>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl shadow-lg border-border/50 bg-card/95 backdrop-blur-sm">
                                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setActiveTab("profile")} className="cursor-pointer">
                                    <UserCircle className="mr-2 h-4 w-4" />
                                    Thông tin cá nhân
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive focus:text-destructive cursor-pointer">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Đăng xuất
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu Trigger */}
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-secondary">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0">
                                <SheetHeader className="mb-6 text-left px-4">
                                    <SheetTitle className="flex items-center gap-2">
                                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                                        <span className="font-bold">Menu</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-2 px-2">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        const isActive = activeTab === item.id;
                                        return (
                                            <Button
                                                key={item.id}
                                                variant={isActive ? "secondary" : "ghost"}
                                                className={cn(
                                                    "w-full justify-start text-base font-medium h-12 rounded-xl transition-all",
                                                    isActive ? "bg-primary/10 text-primary hover:bg-primary/20" : "text-muted-foreground"
                                                )}
                                                onClick={() => handleNavClick(item.id)}
                                            >
                                                <div className={cn(
                                                    "mr-4 h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
                                                    isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                                                )}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                {item.label}
                                            </Button>
                                        );
                                    })}
                                </nav>
                                <div className="absolute bottom-8 left-4 right-8">
                                    <div className="rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 border border-primary/20">
                                        <h4 className="font-semibold text-primary mb-1">Cần trợ giúp?</h4>
                                        <p className="text-xs text-muted-foreground mb-3">Liên hệ với mentor của bạn ngay.</p>
                                        <Button size="sm" className="w-full shadow-md">Chat ngay</Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};
