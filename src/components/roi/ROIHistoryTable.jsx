const ROIHistoryTable = ({ history }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Plan</th>

            <th>ROI Amount</th>

            <th>Credit Date</th>

          </tr>

        </thead>

        <tbody>

          {history.map((item) => (

            <tr
              key={item._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">

                {item.investment?.planName}

              </td>

              <td className="font-semibold text-green-600">

                ₹{item.roiAmount}

              </td>

              <td>

                {new Date(
                  item.creditDate
                ).toLocaleDateString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ROIHistoryTable;