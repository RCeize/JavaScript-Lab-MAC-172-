function signUp(){
	var First = document.iform.first.value;
	var Last = document.iform.last.value;
	var Email = document.iform.email.value;
	var Password = document.iform.password.value;
	var Repassword = document.iform.repassword.value;
	
	
	if(Password == Repassword) {
		console.log("Password is a match");
	}
}

function login() {
	
}

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}



