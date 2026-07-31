import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

import DashboardLayout from "../components/layout/DashboardLayout";

import ProfileCard from "../components/profile/ProfileCard";
import ProfileForm from "../components/profile/ProfileForm";
import SummaryCard from "../components/profile/SummaryCard";
import Loader from "../components/ui/Loader";

const Profile=()=>{

const [loading,setLoading]=useState(true);

const [user,setUser]=useState(null);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const {data}=await api.get("/profile");

setUser(data.user);

}
finally{

setLoading(false);

}

};

const updateProfile=async(values)=>{

try{

const {data}=await api.put("/profile",values);

setUser(data.user);

toast.success(data.message);

}
catch(err){

toast.error(

err.response?.data?.message||

"Update Failed"

);

}

};

if(loading){

return <Loader/>;

}

return(

<DashboardLayout>

<h1 className="text-3xl font-bold mb-6">

My Profile

</h1>

<div className="grid lg:grid-cols-4 gap-5 mb-6">

<SummaryCard

title="Wallet"

value={`₹${user.walletBalance}`}

/>

<SummaryCard

title="ROI Earned"

value={`₹${user.totalROIEarned}`}

color="green"

/>

<SummaryCard

title="Referral Income"

value={`₹${user.totalLevelIncomeEarned}`}

color="purple"

/>

<SummaryCard

title="Referral Code"

value={user.referralCode}

color="orange"

/>

</div>

<ProfileCard user={user}/>

<ProfileForm

user={user}

onSubmit={updateProfile}

/>

</DashboardLayout>

);

};

export default Profile;