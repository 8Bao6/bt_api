function getEle(id) {
    return document.getElementById(id);
}
var action = new action();
var validation = new Validation();
var arrUser = [];

async function start() {
    arrUser = await action.fetchUser();
    renderTable(arrUser);
}
start();


function renderTable(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        var nd = data[i];
        content += `
        <tr>
        <td> ${i + 1} </td>
        <td> ${nd.taiKhoan} </td>
        <td> ${nd.matKhau} </td>
        <td> ${nd.hoTen} </td>
        <td> ${nd.email} </td>
        <td> ${nd.ngonNgu} </td>
        <td> ${nd.loaiND} </td>
        <td><img src="${nd.hinhAnh}" alt="" width="100%" height="100px"></td>
        <td> 
           <button class="btn btn-success" onclick="deleteNV('${nd.id}')"> Delete </button>
           <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick="editNV('${nd.id}')"> Edit </button>
        </td>
        </tr>
        `;
    }
    getEle("tblDanhSachNguoiDung").innerHTML = content;

};

function layUser(isAdd) {
    var id = getEle("id").value;
    var tk = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var hinhAnh = getEle("HinhAnh").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;

    var isValid = true;

    if (isAdd) {
        isValid &= validation.kiemTraRong(tk, "errortk", "(*) Vui lòng nhập tài khoản") &&
            validation.kiemTraDoDaiKyTu(tk, "errortk", "(*) Vui lòng nhập ký tự 5-30", 5, 30) &&
            validation.kiemTraTrungTaiKhoan(tk, "errortk", "(*) Tài khoản đã tồn tại", arrUser);
    }

    isValid &= validation.kiemTraRong(hoTen, "errorHoTen", "(*) Vui lòng nhập họ tên") &&
        validation.kiemTraChuoiKitu(hoTen, "errorHoTen", "(*) Vui lòng nhập chuỗi ký tự");
    isValid &= validation.kiemTraRong(matKhau, "errormk", "(*) Vui lòng nhập mật khẩu");

    isValid &= validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập Email") &&
        validation.kiemTraEmail(email, "errorEmail", "(*)Vui lòng nhập đúng định dạng ");
    isValid &= validation.kiemTraRong(hinhAnh, "errorHinhAnh", "(*) Vui lòng chọn hình ảnh");
    isValid &= validation.kiemTraRong(loaiND, "errorLoaiND", "(*) Vui lòng chọn kiểu người dùng");
    isValid &= validation.kiemTraRong(ngonNgu, "errorLoaiNG", "(*) Vui lòng chọn ngôn ngữ");

    isValid &= validation.kiemTraRong(moTa, "errorMoTa", "(*) Không được để trống") &&
        validation.kiemTraDoDaiKyTu(moTa, "errorMoTa", "(*) Không vượt quá 600 ký tự", 1, 600);

    if (!isValid) return;
    var nd = new nguoiDung(id, tk, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);

    return nd;
};


getEle("btnThemNguoiDung").onclick = function () {
    undoTable();
    document.querySelector(".btn_add").style.display = "block";
    document.querySelector(".btn_edit").style.display = "none";
}


getEle("add").onclick = async function () {
    var nd = layUser(true);
    if (nd) {
        await action.fetchUserAdd(nd);
        start();

        alert('Thêm thành công');
    }

};
async function deleteNV(id) {
    await action.fetchUserDelete(id);
    start();
};
async function editNV(id) {
    var user = await action.fetchUserEdit(id);
    getEle("id").value = user.id;
    getEle("TaiKhoan").value = user.taiKhoan;
    getEle("HoTen").value = user.hoTen;
    getEle("MatKhau").value = user.matKhau;
    getEle("Email").value = user.email;
    getEle("HinhAnh").value = user.hinhAnh;
    getEle("loaiNguoiDung").value = user.loaiND;
    getEle("loaiNgonNgu").value = user.ngonNgu;
    getEle("MoTa").value = user.moTa;

    document.querySelector(".btn_add").style.display = "none";
    document.querySelector(".btn_edit").style.display = "block";
};

getEle("edit").onclick = async function () {
    var user = layUser();
    console.log(user);
    await action.fetchUserUpdate(user);
    start();
    undoTable()
    document.querySelector(".btn_add").style.display = "block";
    document.querySelector(".btn_edit").style.display = "none";
};
function undoTable() {
    getEle("id").value = ""
    getEle("TaiKhoan").value = ""
    getEle("HoTen").value = ""
    getEle("MatKhau").value = ""
    getEle("Email").value = ""
    getEle("HinhAnh").value = ""
    getEle("loaiNguoiDung").value = ""
    getEle("loaiNgonNgu").value = ""
    getEle("MoTa").value = ""
};

