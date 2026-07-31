import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import ReferralCard from "../components/referral/ReferralCard";
import IncomeTable from "../components/referral/IncomeTable";
import Loader from "../components/ui/Loader";
import api from "../services/api";

const Referrals = () => {

const [loading,setLoading]=useState(true);

const [referrals,setReferrals]=useState([]);

const [income,setIncome]=useState([]);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const direct=await api.get("/referrals/direct");

const earning=await api.get("/referrals/income");

setReferrals(direct.data.referrals);

setIncome(earning.data.income);

}
finally{

setLoading(false);

}

};

if(loading) return <Loader/>;

return(

<DashboardLayout>

<h1 className="text-3xl font-bold mb-6">

Referrals

</h1>

<div className="grid md:grid-cols-2 gap-4 mb-8">

{referrals.map(item=>(

<ReferralCard
key={item._id}
referral={item}
/>

))}

</div>

<h2 className="text-2xl font-bold mb-4">

Referral Income

</h2>

<IncomeTable income={income}/>

</DashboardLayout>

);

};

export default Referrals;