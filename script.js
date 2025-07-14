// - Bài tập: 
// Khai báo mảng students rỗng.
// Thêm các học sinh "An", "Bình", "Chi" vào mảng.
// Học sinh "Bình" nghỉ học, hãy xoá bạn đó khỏi mảng.
// Thêm "Dũng" vào đầu danh sách.

// In ra danh sách cuối cùng.
let students = [];
students.push("An", "Bình", "Chi"); // Thêm học sinh vào mảng
students.splice(1,1); // Xoá "Bình" khỏi mảng
students.unshift("Dũng"); // Thêm "Dũng" vào đầu mảng
console.log(students); // In ra danh sách học sinh cuối cùng

const fruits = ['Táo', 'Chuối', 'Cam'];
fruits.forEach(function(fruit, index) {
  console.log(index + ': ' + fruit);
});
