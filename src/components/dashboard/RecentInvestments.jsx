import { useEffect, useState } from "react";
import api from "../../services/api";

const RecentInvestments = () => {

const [investments,setInvestments]=useState([]);

useEffect(()=>{

load();

},[]);

const load=async()=>{

const {data}=await api.get("/investments");

setInvestments(data.investments);

};

return(

<div className="bg-white rounded-xl shadow p-5 mt-6">

<h2 className="font-bold mb-4">

Recent Investments

</h2>

<table className="w-full">

<thead>

<tr>

<th>Plan</th>

<th>Amount</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

investments.slice(0,5).map(item=>(

<tr key={item._id}>

<td>{item.planName}</td>

<td>

₹{item.investmentAmount}

</td>

<td>

{item.status}

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

};

export default RecentInvestments;