import { useState, useEffect } from "react";

const ProfileForm = ({ user, onSubmit }) => {

const [form,setForm]=useState({
fullName:"",
mobile:"",
});

useEffect(()=>{

if(user){

setForm({

fullName:user.fullName,

mobile:user.mobile,

});

}

},[user]);

const change=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value,

});

};

return(

<form
onSubmit={(e)=>{

e.preventDefault();

onSubmit(form);

}}

className="bg-white rounded-xl shadow-lg p-6 mt-6"
>

<div className="grid md:grid-cols-2 gap-5">

<div>

<label className="block mb-2">

Full Name

</label>

<input

className="border rounded-lg p-3 w-full"

name="fullName"

value={form.fullName}

onChange={change}

/>

</div>

<div>

<label className="block mb-2">

Mobile

</label>

<input

className="border rounded-lg p-3 w-full"

name="mobile"

value={form.mobile}

onChange={change}

/>

</div>

</div>

<button

className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"

>

Update Profile

</button>

</form>

);

};

export default ProfileForm;