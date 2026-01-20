import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Lock, Bell, Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const Profile = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Profile Header */}
      <Card className="p-6 shadow-elegant">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">HV</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Học viên</h2>
            <p className="text-muted-foreground">student@example.com</p>
            <Button variant="outline" size="sm" className="mt-2">
              Thay đổi ảnh đại diện
            </Button>
          </div>
        </div>
      </Card>

      {/* Settings Tabs */}
      <Card className="p-6 shadow-elegant">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">
              <User className="h-4 w-4 mr-2" />
              Tài khoản
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="h-4 w-4 mr-2" />
              Bảo mật
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Thông báo
            </TabsTrigger>
          </TabsList>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" defaultValue="Học viên" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="student@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input id="phone" type="tel" placeholder="Chưa cập nhật" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="career">Nghề nghiệp mục tiêu</Label>
              <Input id="career" defaultValue="Fullstack Developer" />
            </div>
            <Button className="w-full">Lưu thay đổi</Button>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Mật khẩu mới</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full">Đổi mật khẩu</Button>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Xác thực hai yếu tố</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Thêm một lớp bảo mật cho tài khoản của bạn
              </p>
              <Button variant="outline" className="w-full">Bật xác thực 2 yếu tố</Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Thông báo qua Email</Label>
                <p className="text-sm text-muted-foreground">
                  Nhận thông báo về khóa học mới và cập nhật
                </p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Thông báo đẩy</Label>
                <p className="text-sm text-muted-foreground">
                  Nhận thông báo trực tiếp trên trình duyệt
                </p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Báo cáo hàng tuần</Label>
                <p className="text-sm text-muted-foreground">
                  Nhận tóm tắt tiến độ học tập hàng tuần
                </p>
              </div>
              <Switch
                checked={notifications.weekly}
                onCheckedChange={(checked) => setNotifications({ ...notifications, weekly: checked })}
              />
            </div>

            <Button className="w-full">Lưu cài đặt</Button>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
