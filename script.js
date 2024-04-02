//your JS code here. If required.
let checkbox=document.getElementById("checkbox")
// checkbox.addEventListener("click",(e)=>{
// 	if(e.target.checked){
// 		alert("HEYUCHECKE")
// 	}
// })
let submitbtn=document.getElementById("submit");
let userName=document.getElementById("username");
let password=document.getElementById("password")
submitbtn.addEventListener("click",()=>{
	let obj={
	
	usetex:userName.value,
	pas:password.value,
	}
	
	alert(`Logged in as ${obj.usetex}`)
	
	if(checkbox.checked)
	{
	sessionStorage.setItem('checkboxState',JSON.stringify(obj));
	}
	else{
		sessionStorage.removeItem('checkboxState');
	}
})
