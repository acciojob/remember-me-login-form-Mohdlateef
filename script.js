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
	

	
	if(checkbox.checked)
	{
	sessionStorage.setItem('checkboxState',JSON.stringify(obj));
	}
	else{
		sessionStorage.removeItem('checkboxState');
	}
		alert(`Login as ${obj.usetex}`)
})
let data=JSON.parse(sessionStorage.getItem('checkboxState'))
// alert(data)
					if(data!="")
{
	let loginbtn=document.createElement("button");
	// loginbtn.value="abc"
	loginbtn.id="existing";
	submitbtn.insertAdjacentElement("afterEnd",loginbtn)
	loginbtn.innerText=`login as ${data.usetex}`
	loginbtn.addEventListener("click",()=>{
		alert(`login as ${data.usetex}`)
	})
	// alert(data.usetex)
}
