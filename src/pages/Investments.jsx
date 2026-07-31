import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../components/layout/DashboardLayout";
import api from "../services/api";

const Investments = () => {
    const [loading, setLoading] = useState(true);

    const [investments, setInvestments] = useState([]);

    const [form, setForm] = useState({
        planName: "",
        investmentAmount: "",
        dailyROI: "",
        endDate: "",
    });

    useEffect(() => {
        loadInvestments();
    }, []);

    const loadInvestments = async () => {
        try {
            const { data } = await api.get("/investments");
            setInvestments(data.investments || []);
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Failed to load investments"
            );
        } finally {
            setLoading(false);
        }
    };

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const createInvestment = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post("/investments", {
                planName: form.planName,
                investmentAmount: Number(form.investmentAmount),
                dailyROI: Number(form.dailyROI),
                endDate: form.endDate,
            });

            toast.success(data.message || "Investment Created");

            setForm({
                planName: "",
                investmentAmount: "",
                dailyROI: "",
                endDate: "",
            });

            loadInvestments();
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Unable to create investment"
            );
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">
                Investments
            </h1>

            {/* Create Investment */}

            <form
                onSubmit={createInvestment}
                className="bg-white shadow rounded-xl p-6 mb-8"
            >
                <div className="grid md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="planName"
                        placeholder="Plan Name"
                        className="border rounded-lg p-3"
                        value={form.planName}
                        onChange={changeHandler}
                        required
                    />

                    <input
                        type="number"
                        name="investmentAmount"
                        placeholder="Investment Amount"
                        className="border rounded-lg p-3"
                        value={form.investmentAmount}
                        onChange={changeHandler}
                        required
                    />

                    <input
                        type="number"
                        name="dailyROI"
                        placeholder="Daily ROI (%)"
                        className="border rounded-lg p-3"
                        value={form.dailyROI}
                        onChange={changeHandler}
                        required
                    />

                    <input
                        type="date"
                        name="endDate"
                        className="border rounded-lg p-3"
                        value={form.endDate}
                        onChange={changeHandler}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                    Create Investment
                </button>
            </form>

            {/* Investment List */}

            <div className="bg-white shadow rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left">
                                Plan
                            </th>
                            <th>Amount</th>
                            <th>Daily ROI</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center p-6"
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : investments.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center p-6"
                                >
                                    No Investments Found
                                </td>
                            </tr>
                        ) : (
                            investments.map((item) => (
                                <tr
                                    key={item._id}
                                    className="border-t"
                                >
                                    <td className="p-4">
                                        {item.planName}
                                    </td>

                                    <td>
                                        ₹{item.investmentAmount}
                                    </td>

                                    <td>
                                        {item.dailyROI}%
                                    </td>

                                    <td>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${item.status === "ACTIVE"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default Investments;