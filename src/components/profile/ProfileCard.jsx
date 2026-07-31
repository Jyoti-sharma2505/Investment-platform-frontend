const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">

          {user.fullName?.charAt(0)}

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            {user.fullName}

          </h2>

          <p className="text-gray-500">

            {user.email}

          </p>

          <p className="text-gray-500">

            {user.mobile}

          </p>

          <p className="mt-2 text-sm">

            Referral Code :

            <span className="font-semibold ml-2">

              {user.referralCode}

            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;