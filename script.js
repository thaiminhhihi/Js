// <!-- Xây dựng 1 trang HTML cho phép quản lý danh sách nhân viên với các chức năng CRUD:

// 🎯 Chức năng yêu cầu:

// Thêm nhân viên mới
// Hiển thị danh sách nhân viên trong bảng
// Sửa thông tin nhân viên
// Xoá nhân viên khỏi danh sách
// 📋 Trường dữ liệu nhân viên:

// Trường	Kiểu dữ liệu	Ràng buộc
// Mã nhân viên (id)	Tự sinh (số tăng dần, hoặc timestamp)	
// Họ tên (name)	text, bắt buộc, tối đa 255 ký tự	
// Tuổi (age)	number, tối thiểu 18, tối đa 65	
// Giới tính (gender)	radio: Nam / Nữ	
// Vị trí (position)	select, ví dụ: Kế toán, Lập trình viên, Quản lý	
// Ghi chú (note)	textarea, không bắt buộc, tối đa 300 ký tự	
// 📌 Yêu cầu kỹ thuật:
// Viết toàn bộ bằng HTML + CSS (cơ bản) + JavaScript thuần
// Không cần kết nối backend hoặc database, dữ liệu lưu tạm trong biến array
// Có xác nhận khi xóa nhân viên
// Reset form sau khi thêm / sửa
// Danh sách hiển thị trong bảng có các cột:

// STT | Mã NV | Họ tên | Tuổi | Giới tính | Vị trí | Ghi chú | Hành động (Sửa / Xoá) -->

// script.js

let employees = [];
let editingIndex = -1;

document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const code = document.getElementById("code").value.trim();
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const position = document.getElementById("position").value.trim();
    const note = document.getElementById("note").value.trim();

    if (!name || name.length > 255 || !gender || !position) {
        alert("Vui lòng nhập đầy đủ và đúng định dạng thông tin.");
        return;
    }

    const employee = {
        id: code || Date.now(), // Tự sinh mã nếu không nhập
        name,
        age,
        gender,
        position,
        note
    };

    if (editingIndex === -1) {
        // Thêm mới
        employees.push(employee);
    } else {
        // Sửa
        employees[editingIndex] = employee;
        editingIndex = -1;
    }

    renderTable();
    resetForm();
});

function renderTable() {
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = "";

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.gender}</td>
            <td>${emp.position}</td>
            <td>${emp.note}</td>
            <td>
                <button onclick="editEmployee(${index})">Sửa</button>
                <button onclick="deleteEmployee(${index})">Xoá</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editEmployee(index) {
    const emp = employees[index];
    document.getElementById("code").value = emp.id;
    document.getElementById("name").value = emp.name;
    document.getElementById("age").value = emp.age;
    document.getElementById("gender").value = emp.gender;
    document.getElementById("position").value = emp.position;
    document.getElementById("note").value = emp.note;

    editingIndex = index;
}

function deleteEmployee(index) {
    const confirmed = confirm("Bạn có chắc muốn xoá nhân viên này?");
    if (confirmed) {
        employees.splice(index, 1);
        renderTable();
    }
}

function resetForm() {
    document.getElementById("employeeForm").reset();
    editingIndex = -1;
    document.getElementById("code").value = "";
}
