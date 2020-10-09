function form_validate()
{
	var uid = document.validation.uid.value;
	var pwd = document.validation.pwd.value;
	if(user_id(uid,5,12))
	{

	}
	var pattern1 = /^[0-9A-Za-z]+$/;
	var uname1 = document.validation.uname.value;
	if(uname1.match(pattern1))
	{
		alert("Success");
	}
	else
	{
		alert("Type only alphabets");
	}
}
function user_id(uid,mn,mx)
{
	var user_id = uid.length;
	if(user_id == 0 || user_id > mx || user_id < mn)
	{
		alert("User ID should not be empty / character should not be less than"+ mn + "/ not to greater than" + mx);
		user_id.focus();
		return false;
	}
	return true;
}