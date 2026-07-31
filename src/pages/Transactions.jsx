import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import Loader from "../components/ui/Loader";

import TransactionTable from "../components/transaction/TransactionTable";

import api from "../services/api";

const Transactions=()=>{

const [transactions,setTransactions]=useState([]);

const [loading,setLoading]=useState(true);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const {data}=await api.get("/transactions");

setTransactions(data.transactions);

}
finally{

setLoading(false);

}

};

if(loading){

return <Loader/>;

}

return(

<DashboardLayout>

<h1 className="text-3xl font-bold mb-6">

Transactions

</h1>

<TransactionTable

transactions={transactions}

/>

</DashboardLayout>

);

};

export default Transactions;