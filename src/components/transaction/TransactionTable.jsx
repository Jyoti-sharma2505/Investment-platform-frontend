const TransactionTable = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">

              Type

            </th>

            <th>

              Amount

            </th>

            <th>

              Description

            </th>

            <th>

              Date

            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((item) => (

            <tr
              key={item._id}
              className="border-b"
            >

              <td className="p-4">

                {item.type}

              </td>

              <td className="text-green-600 font-semibold">

                ₹{item.amount}

              </td>

              <td>

                {item.description}

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

export default TransactionTable;