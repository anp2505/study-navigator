import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Lock, Bell, Phone, MapPin, Calendar, BookOpen, Award, Camera, Save } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export const Profile = () => {

  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");
  
  const [profileData, setProfileData] = useState({
    fullName: "Nguyễn Văn A",
    email: "Adanghocknnn@example.com",
    phone: "0123456789",
    dateOfBirth: "2000-01-24",
    address: "Hà Nội, Việt Nam",
    school: "Đại học Bách Khoa Hà Nội",
    major: "Công nghệ thông tin",
    studentId: "SV20200001",
    yearOfStudy: "Năm 2",
    gpa: "4.0",
    careerGoal: "Fullstack Developer",
    bio: "Sinh viên năng động, đáng iu <3."
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    deadline: true,
    newCourse: true
  });


  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // TODO: API call to save profile
    alert("Đã lưu thông tin thành công!");
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      {/* Profile Header - Enhanced */}
      <Card className="p-8 shadow-lg border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar with upload */}
          <div className="relative group">
            <Avatar className="h-32 w-32 border-4 border-blue-500 shadow-xl">
              <AvatarImage src={avatarPreview || ""} />
              <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                {profileData.fullName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <label 
              htmlFor="avatar-upload" 
              className="absolute bottom-0 right-0 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-700 transition-all shadow-lg group-hover:scale-110"
            >
              <Camera className="h-5 w-5 text-white" />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
          
          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{profileData.fullName}</h2>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <BookOpen className="h-4 w-4" />
                <span>{profileData.studentId} • {profileData.yearOfStudy}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold">GPA: {profileData.gpa}/4.0</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Settings Tabs - Enhanced */}
      <Card className="p-6 shadow-lg">
        <Tabs defaultValue="account" className="w-full">

          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="account" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              Tài khoản
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Lock className="h-4 w-4 mr-2" />
              Bảo mật
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Bell className="h-4 w-4 mr-2" />
              Thông báo
            </TabsTrigger>
          </TabsList>

          {/* Account Tab - Enhanced */}
          <TabsContent value="account" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                  <User className="h-4 w-4" />
                  Họ và tên
                </Label>
                <Input 
                  id="name" 
                  value={profileData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="border-2 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 font-semibold">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-2 focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
                  <Phone className="h-4 w-4" />
                  Số điện thoại
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="border-2 focus:border-blue-500"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob" className="flex items-center gap-2 font-semibold">
                  <Calendar className="h-4 w-4" />
                  Ngày sinh
                </Label>
                <Input 
                  id="dob" 
                  type="date" 
                  value={profileData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="border-2 focus:border-blue-500"
                />
              </div>

              {/* Address */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4" />
                  Địa chỉ
                </Label>
                <Input 
                  id="address" 
                  value={profileData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="border-2 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="pt-6 border-t">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Thông tin học vấn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="school" className="font-semibold">Trường</Label>
                  <Input 
                    id="school" 
                    value={profileData.school}
                    onChange={(e) => handleInputChange('school', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="major" className="font-semibold">Chuyên ngành</Label>
                  <Input 
                    id="major" 
                    value={profileData.major}
                    onChange={(e) => handleInputChange('major', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId" className="font-semibold">Mã sinh viên</Label>
                  <Input 
                    id="studentId" 
                    value={profileData.studentId}
                    onChange={(e) => handleInputChange('studentId', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year" className="font-semibold">Năm học</Label>
                  <Input 
                    id="year" 
                    value={profileData.yearOfStudy}
                    onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gpa" className="font-semibold flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    Điểm GPA
                  </Label>
                  <Input 
                    id="gpa" 
                    value={profileData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="career" className="font-semibold">Nghề nghiệp mục tiêu</Label>
                  <Input 
                    id="career" 
                    value={profileData.careerGoal}
                    onChange={(e) => handleInputChange('careerGoal', e.target.value)}
                    className="border-2 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="font-semibold">Giới thiệu bản thân</Label>
              <Textarea 
                id="bio" 
                rows={4}
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Viết vài dòng về bản thân..."
                className="border-2 focus:border-blue-500"
              />
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              onClick={handleSaveProfile}
            >
              <Save className="mr-2 h-5 w-5" />
              Lưu thay đổi
            </Button>
          </TabsContent>

          {/* Security Tab - Enhanced */}
          <TabsContent value="security" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="font-semibold">Mật khẩu hiện tại</Label>
                <Input 
                  id="current-password" 
                  type="password" 
                  className="border-2 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className="font-semibold">Mật khẩu mới</Label>
                <Input 
                  id="new-password" 
                  type="password" 
                  className="border-2 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="font-semibold">Xác nhận mật khẩu mới</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  className="border-2 focus:border-blue-500"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Lock className="mr-2 h-4 w-4" />
                Đổi mật khẩu
              </Button>
            </div>

            <div className="pt-6 border-t">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold text-lg mb-2">🔐 Xác thực hai yếu tố</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Thêm một lớp bảo mật cho tài khoản của bạn bằng xác thực 2 bước
                </p>
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Bật xác thực 2 yếu tố
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="font-bold text-lg text-red-700 mb-2">⚠️ Vùng nguy hiểm</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Hành động này không thể hoàn tác
                </p>
                <Button variant="destructive" className="w-full">
                  Xóa tài khoản
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab - Enhanced */}
          <TabsContent value="notifications" className="space-y-6 mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-blue-300 transition">
                <div className="space-y-1">
                  <Label className="font-semibold text-base">Thông báo qua Email</Label>
                  <p className="text-sm text-gray-600">
                    Nhận thông báo về khóa học mới và cập nhật quan trọng
                  </p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-blue-300 transition">
                <div className="space-y-1">
                  <Label className="font-semibold text-base">Thông báo đẩy</Label>
                  <p className="text-sm text-gray-600">
                    Nhận thông báo trực tiếp trên trình duyệt
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-blue-300 transition">
                <div className="space-y-1">
                  <Label className="font-semibold text-base">Báo cáo hàng tuần</Label>
                  <p className="text-sm text-gray-600">
                    Nhận tóm tắt tiến độ học tập hàng tuần
                  </p>
                </div>
                <Switch
                  checked={notifications.weekly}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, weekly: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-blue-300 transition">
                <div className="space-y-1">
                  <Label className="font-semibold text-base">Nhắc nhở deadline</Label>
                  <p className="text-sm text-gray-600">
                    Nhận nhắc nhở khi có bài tập sắp hết hạn
                  </p>
                </div>
                <Switch
                  checked={notifications.deadline}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, deadline: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-blue-300 transition">
                <div className="space-y-1">
                  <Label className="font-semibold text-base">Khóa học mới</Label>
                  <p className="text-sm text-gray-600">
                    Thông báo khi có khóa học mới phù hợp với bạn
                  </p>
                </div>
                <Switch
                  checked={notifications.newCourse}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, newCourse: checked })}
                />
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              <Save className="mr-2 h-5 w-5" />
              Lưu cài đặt
            </Button>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};