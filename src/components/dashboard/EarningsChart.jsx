import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const EarningsChart = ({ dashboard }) => {

const data=[

{

name:"Investment",

value:dashboard.totalInvestment

},

{

name:"Wallet",

value:dashboard.walletBalance

},

{

name:"ROI",

value:dashboard.totalROI

},

{

name:"Referral",

value:dashboard.totalLevelIncome

}

];

return(

<div className="bg-white rounded-xl shadow p-5">

<h2 className="font-bold text-lg mb-5">

Analytics

</h2>

<div style={{height:320}}>

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="value"/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

);

};

export default EarningsChart;