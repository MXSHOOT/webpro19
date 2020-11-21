//function getForm
function getForm() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let jam = document.getElementById("time").value
    let jumlah = document.getElementById("jumlah").value
    var tujuan = formPendaftaran.tujuan[formPendaftaran.tujuan.selectedIndex].text

    document.write("Hasil Input <br>")
    document.write("Nama Pengguna : " + nama + "<br>")
    document.write("Email : " + email + "<br>")
    document.write("Jam Keberangkatan : " + jam + "<br>")
    document.write("Tujuan Keberangkatan : " + tujuan + "<br>")
    document.write("Jumlah Tiket : " + jumlah + "<br>")


}
function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["tujuan"].selectedIndex < 1) {
        alert("Pilih Tujuan.");
        document.forms["formPendaftaran"]["tujuan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["time"].value == "") {
        alert("Pilih Waktu.");
        document.forms["formPendaftaran"]["time"].focus();
        return false;
    }
}