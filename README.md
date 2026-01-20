<<<<<<< HEAD
# study-navigator
=======
# Study Navigator - Nền tảng Học tập & Định hướng IT Cá nhân hóa

**Study Navigator** là nền tảng giúp sinh viên Công nghệ Thông tin thoát khỏi *“ma trận định hướng”*, xây dựng **lộ trình học tập thực chiến** và **kết nối với cộng đồng chuyên môn**. 



## ✨ Tính năng nổi bật
### Đánh giá Năng lực & Thị trường
* Hệ thống khảo sát chọn lọc các chuyên ngành IT (Frontend, Backend, AI, Data...).
* Visual Data: Sử dụng recharts để hiển thị biểu đồ Radar (mạng nhện) so sánh năng lực cá nhân với chuẩn thị trường (Mock data).
* Tính toán khoảng cách kỹ năng (Skill gap analysis).

### Dashboard Cá nhân hóa (Post-Login)
* My Roadmap: Lộ trình học tập dạng Timeline dọc từ "Zero to Hero".
* Community Hub: Kết nối nhanh với các cộng đồng qua Messenger, Discord, Email (không tích hợp chat trực tiếp để tối ưu hiệu năng).
* AI Mentor Widget: Giao diện khung chat chuyên nghiệp, sẵn sàng tích hợp API AI (OpenAI/Gemini).
* Resource Library: Kho tài liệu PDF và link thực hành.

## 🛠 Công nghệ sử dụng
- Framework: React 18 + Vite

- Ngôn ngữ: TypeScript

- Styling: Tailwind CSS

- UI Components: shadcn/ui

- Icons: Lucide React

- Charts: Recharts

- Animations: Tailwind CSS Animate

## 🚀 Hướng dẫn cài đặt và chạy thử
### 1. Tải dự án về máy

```bash
git clone https://github.com/your-username/study-navigator.git

cd study-navigator
```
### 2. Cài đặt thư viện
```Bash
npm install
```

### 3. Cấu hình biến môi trường (Nếu có)

Tạo file .env ở thư mục gốc nếu bạn có ý định gắn API key cho AI Mentor.

### 4. Chạy dự án ở chế độ phát triển
```Bash
npm run dev
```
Sau đó mở trình duyệt tại: http://localhost:5173

### 5. Đóng gói dự án (Production)
```Bash
npm run build
```
## 📂 Cấu trúc thư mục

```bash
study-navigator/
├── src/
│   ├── components/       # Các thành phần giao diện tái sử dụng
│   │   └── ui/           # Thư viện shadcn/ui
│   ├── hooks/            # Các custom hooks (use-toast,...)
│   ├── lib/              # Tiện ích (utils.ts)
│   ├── sections/         # Các phần lớn (Flashcards, Dashboard, Test)
│   ├── App.tsx           # File chính điều hướng logic
│   ├── main.tsx          # Điểm đầu vào của React
│   └── index.css         # Cấu hình Tailwind global
├── public/               # Logo, ảnh, file tĩnh
├── tailwind.config.ts    # Cấu hình hệ màu & theme
└── components.json       # Cấu hình shadcn/ui
```

## 🤝 Liên hệ & Đóng góp
Nếu bạn có bất kỳ câu hỏi nào về lộ trình hoặc muốn đóng góp tính năng, vui lòng liên hệ:

- Admin: Kẻ cắp điểm 10
- Email: 24520064@gm.uit.edu.vn



**Note:** Dự án đang trong giai đoạn phát triển giao diện (UI/UX). Các tính năng Backend và AI API sẽ được cập nhật trong phiên bản tiếp theo.e-Registration)
>>>>>>> master
