function validasi(){
var username = document.forms["myForm"]["username"].value;
var password = document.forms["myForm"]["password"].value;
if( username == "ahmad2017" && password == "integrity"){
	alert("username dan password Anda BENAR");
	console.log("Username dan Password anda sudah benar")
	return true;
}
else if(username =="" || password ==""){
	alert("Masukan username dan password Anda");
	console.log("Masukan username dan Password")
	return false;
}
else{
	alert("Username atau password yang Anda masukan SALAH");
	console.log("Password atau Username anda salah")
	return false;
}
  }
