const SummaryCard = ({ title, value, color = "blue" }) => {

    const colors = {
        blue: "text-blue-600",
        green: "text-green-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
    };
    return (
        <div className="bg-white rounded-xl shadow-md p-5">
            <p className="text-gray-500 text-sm">{title}</p>

            <h2 className={`text-2xl font-bold ${colors[color]}`}>
                {value}
            </h2>
        </div>
    );
};

export default SummaryCard;