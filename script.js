// <!-- Bài tập: 
// Bài 1: Tạo một ứng dụng quản lý danh sách sinh viên bao gồm:
// Thêm sinh viên (Tên, Tuổi, Lớp)
// Hiển thị danh sách sinh viên trong bảng
// Sửa thông tin sinh viên
// Xoá sinh viên

console.log('Quản lý danh sách sinh viên');

const form = document.getElementById('studentForm');

form. addEventListener("submit", function(event) {
      event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const className = document.getElementById('class').value;
    const studentlist = document.getElementById('studentList');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${age}</td><td>${className}</td>
                     <td><button class="editStudent">Sửa</button></td>
                     <td><button class="deleteStudent">Xoá</button></td>`;
    studentlist.appendChild(row);
    form.reset();
    const editStudent = row.querySelector('.editStudent');
    const deleteStudent = row.querySelector('.deleteStudent');

    editStudent.addEventListener('click', function() {
 
     const cells = row.querySelectorAll('td');
    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('age').value = cells[1].textContent;
    document.getElementById('class').value = cells[2].textContent;

    row.remove(); 
        
         


       
    });
    deleteStudent.addEventListener('click', function() {
        console.log('Xoá sinh viên');
        studentlist.removeChild(row);
    });
});

// Bài 2: Xây dựng ứng dụng web quản lý công việc (todo list) cho phép người dùng:
// Thêm công việc mới
// Hiển thị danh sách công việc
// Đánh dấu hoàn thành
// Sửa nội dung công việc
// Xoá công việc -->

console.log('Quản lý công việc (todo list)');
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const jobName = document.getElementById('taskInput').value;
    const jobNameList = document.createElement('li');
    jobNameList.textContent = jobName;
    const taskList = document.getElementById('taskList');
    taskList.appendChild(jobNameList);
    taskForm.reset();
    const tick = document.createElement('button');
    tick.textContent = 'Hoàn thành';
    jobNameList.appendChild(tick);
    tick.addEventListener('click', function() {
        jobNameList.style.textDecoration = 'line-through';
    });
    const editjob = document.createElement('button');
    editjob.textContent = 'Sửa';
    editjob.addEventListener('click', function() {
        const newJobName = prompt('Nhập nội dung công việc mới:', jobNameList.textContent.replace('Hoàn thànhSửa', '').trim());
        if (newJobName) {
            jobNameList.firstChild.textContent = newJobName;
        }
    });
    jobNameList.appendChild(editjob);
    const deletejob = document.createElement('button');
    deletejob.textContent = 'Xoá';
    deletejob.addEventListener('click', function() {
        taskList.removeChild(jobNameList);
    });
    jobNameList.appendChild(deletejob);



});





 
