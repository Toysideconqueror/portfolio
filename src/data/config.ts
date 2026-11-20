// Cấu hình dịch vụ bên ngoài.
//
// Form liên hệ gửi qua Web3Forms (https://web3forms.com):
// trang tĩnh không có máy chủ riêng để gửi mail, nên form gửi dữ liệu tới API của Web3Forms,
// và Web3Forms chuyển thành email tới địa chỉ đã đăng ký với access key này.
// Key này được thiết kế để nằm công khai trong code phía trình duyệt: nó chỉ cho phép
// gửi mail TỚI hộp thư của bạn, không đọc được hay gửi đi nơi khác.
// Khi key còn rỗng, nút Gửi sẽ mở ứng dụng mail của người xem (mailto) thay thế.
export const WEB3FORMS_ACCESS_KEY = "7e758369-b96f-4dd8-b6c4-e04ff3696fef";
