import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import Loader from "../components/ui/Loader";
import ROIHistoryTable from "../components/roi/ROIHistoryTable";
import api from "../services/api";

const ROIHistory = () => {

const [history,setHistory]=useState([]);

const [loading,setLoading]=useState(true);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const {data}=await api.get("/roi-history");

setHistory(data.history);

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

ROI History

</h1>

<ROIHistoryTable history={history}/>

</DashboardLayout>

);

};

export default ROIHistory;