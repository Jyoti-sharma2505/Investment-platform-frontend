const ReferralCard = ({ referral }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="font-bold text-lg">

            {referral.fullName}

          </h3>

          <p className="text-gray-500">

            {referral.email}

          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-gray-400">

            Joined

          </p>

          <p>

            {new Date(
              referral.createdAt
            ).toLocaleDateString()}

          </p>

        </div>

      </div>

    </div>
  );
};

export default ReferralCard;