import { useEffect, useState } from "react";

import {

    FiDollarSign,

    FiCreditCard,

    FiTrendingUp,

    FiUsers

} from "react-icons/fi";

import DashboardLayout from "../components/layout/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";

import EarningsChart from "../components/dashboard/EarningsChart";

import RecentInvestments from "../components/dashboard/RecentInvestments";

import Loader from "../components/ui/Loader";

import api from "../services/api";

const Dashboard = () => {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const { data } =

                await api.get("/investments/dashboard");

            setDashboard(data);

        }
        catch (err) {

            console.log(err);

        }
        finally {

            setLoading(false);

        }

    };

    if (loading)

        return <Loader />;

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                Dashboard

            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatCard

                    title="Wallet"

                    value={dashboard.walletBalance}

                    icon={<FiDollarSign size={25} />}

                    color="bg-green-500"

                />

                <StatCard

                    title="Investment"

                    value={dashboard.totalInvestment}

                    icon={<FiCreditCard size={25} />}

                    color="bg-blue-500"

                />

                <StatCard

                    title="ROI"

                    value={dashboard.totalROI}

                    icon={<FiTrendingUp size={25} />}

                    color="bg-purple-500"

                />

                <StatCard

                    title="Referral"

                    value={dashboard.totalLevelIncome}

                    icon={<FiUsers size={25} />}

                    color="bg-orange-500"

                />

            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">

                <EarningsChart

                    dashboard={dashboard}

                />

                <RecentInvestments />

            </div>

        </DashboardLayout>

    );

};

export default Dashboard;
