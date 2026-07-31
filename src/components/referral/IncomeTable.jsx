const IncomeTable = ({ income }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">

              From

            </th>

            <th>

              Level

            </th>

            <th>

              Amount

            </th>

            <th>

              Date

            </th>

          </tr>

        </thead>

        <tbody>

          {income.map((item) => (

            <tr
              key={item._id}
              className="border-b"
            >

              <td className="p-4">

                {item.generatedBy?.fullName}

              </td>

              <td>

                Level {item.level}

              </td>

              <td className="text-green-600 font-semibold">

                ₹{item.amount}

              </td>

              <td>

                {new Date(
                  item.createdAt
                ).toLocaleDateString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default IncomeTable;