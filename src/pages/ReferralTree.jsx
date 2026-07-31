import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import TreeNode from "../components/referral/TreeNode";
import Loader from "../components/ui/Loader";
import api from "../services/api";

const ReferralTree = () => {

const [loading,setLoading]=useState(true);

const [tree,setTree]=useState([]);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const {data}=await api.get("/referrals/tree");

setTree(data.tree);

}
finally{

setLoading(false);

}

};

if(loading) return <Loader/>;

return(

<DashboardLayout>

<h1 className="text-3xl font-bold mb-6">

Referral Tree

</h1>

{tree.map(node=>(

<TreeNode
key={node.id}
node={node}
/>

))}

</DashboardLayout>

);

};

export default ReferralTree;