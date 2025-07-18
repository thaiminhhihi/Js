//  Bài tập: Cho mảng danh sách học sinh như sau:


// const students = [
// { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
// { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
// { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
// { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
// { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
// ];
// Yêu cầu:

// : In ra tên và tuổi của từng học sinh.

// : Tạo mảng mới chứa tên học sinh kèm điểm trung bình của họ.

// : Lọc ra các học sinh có điểm trung bình >= 8.

// : Tìm học sinh đầu tiên có tuổi lớn hơn hoặc bằng 17.

// : Kiểm tra xem có học sinh nào có điểm trung bình dưới 5 không.

// : Kiểm tra xem tất cả học sinh có tuổi >= 15 không.

// : Tính điểm trung bình toàn bộ lớp (tính trung bình điểm của từng người trước, rồi tính trung bình tổng thể).
const students = [
{ id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
{ id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
{ id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
{ id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
{ id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];
students.forEach(student => {
    console.log(`Tên: ${student.name}, Tuổi: ${student.age}`);
});
const averageScores = students.map(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  console.log(`Tên: ${student.name}, Điểm trung bình: ${avg}`);
});
const highScorers = students.filter(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg >= 8;
});
console.log("Học sinh có điểm trung bình >= 8:");
highScorers.forEach(student => {
    console.log('Tên:', student.name);
});
const firstOlderStudent = students.find(student => student.age >= 17);
if (firstOlderStudent) {
    console.log(`Học sinh đầu tiên có tuổi >= 17: ${firstOlderStudent.name}`);
}
const hasLowScorer = students.some(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg < 5;
});
console.log(`Có học sinh nào có điểm trung bình dưới 5 không? ${hasLowScorer ? 'Có' : 'Không'}`);
const allOlderThan15 = students.every(student => student.age >= 15);
console.log(`Tất cả học sinh có tuổi >= 15 không? ${allOlderThan15 ? 'Có' : 'Không'}`);
const averageScores2 = students.map(student => {
  return student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
});

const totalClassAverage = averageScores2.reduce((a, b) => a + b, 0) / averageScores2.length;

console.log(` Điểm trung bình toàn lớp: ${totalClassAverage.toFixed(2)}`);

