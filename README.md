# Portfolio

Trang portfolio cá nhân: Next.js + TypeScript + Tailwind CSS, xuất trang tĩnh để deploy lên Cloudflare Pages.

## Chạy thử

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # xuất trang tĩnh ra thư mục out/
```

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/content.ts`. Chứng chỉ Coursera: dán link chia sẻ vào trường `url` của `achievements`.

## Giao diện

- Đơn sắc: chế độ sáng (nền trắng, chữ đen) và tối (nền đen, chữ trắng), có nút chuyển. Lựa chọn được lưu lại; lần đầu theo cài đặt hệ thống.
- Thẻ "liquid glass": lớp `.glass` trong `src/app/globals.css`.

## Deploy lên Cloudflare Pages

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`
