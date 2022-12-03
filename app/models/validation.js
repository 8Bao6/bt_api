function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }

        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    };

    this.kiemTraDoDaiKyTu = function (value, errorId, mess, min, max) {
        if (min <= value.trim().length && value.trim().length <= max) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };

    this.kiemTraChuoiKitu = function (value, errorId, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };

    this.kiemTraEmail = function (value, errorId, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };

    this.kiemTraLoaiND = function (idSelect, errorId, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };

    this.kiemTraTrungTaiKhoan = function (value, errorId, mess, data) {
        var exist = false;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var nd = data[i];
            if (nd.taiKhoan === value) {
                exist = true;
                break;
            }
        }

        if (exist) {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }

        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    };
}
