
// Nhiệm vụ:
// Sử dụng JavaScript để làm các việc sau:
// Truy cập tiêu đề #main-title và thành: "Chào mừng bạn đến với khóa học JavaScript!" sử dụng innerText.
// Truy cập đoạn mô tả có class description và thay đổi thành đoạn HTML: "Bạn sẽ học về <strong>DOM, Events</strong>" sử dụng innerHTML.
// Khi người dùng nhập tên vào ô input và bấm nút , hiển thị lời chào trong thẻ #greeting với nội dung: "Xin chào, [tên học viên]!"
document.getElementById('main-title').innerText = 'Chào mừng bạn đến với khóa học JavaScript!';
document.getElementsByClassName('description')[0].innerHTML = 'Bạn sẽ học về <strong>DOM, Events</strong>';
// Khi người dùng nhập tên vào ô input và bấm nút , hiển thị lời chào trong thẻ #greeting với nội dung: "Xin chào, [tên học viên]!"

document.getElementById('greet-button').addEventListener('click', function() {
    var studentName = document.getElementById('student-name').value;



    document.getElementById('greeting').innerText = 'Xin chào, ' + studentName + '!';
});