// - Sử dụng Promise để hoàn thành bài tập:
// Viết một hàm checkNumber nhận vào một số nguyên num và trả về một Promise:
// Nếu num là số chẵn, Promise sẽ resolve với thông báo: "Số <num> là số chẵn!".
// Nếu num là số lẻ, Promise sẽ reject với thông báo: "Lỗi: Số <num> là số lẻ!".
// Sử dụng .then(), .catch(), và .finally() để xử lý kết quả

function checkNumber(num) {
    return new Promise((resolve,reject) => {
        if (num % 2 === 0) {
            resolve(`Số ${num} là số chẵn!`);
        } else {
            reject(`Lỗi: Số ${num} là số lẻ!`);
        }
    })

} 

checkNumber(4)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Hoàn thành kiểm tra số.");
    });

