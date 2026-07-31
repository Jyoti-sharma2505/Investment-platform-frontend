import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md p-6"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2 className="text-3xl font-bold mt-2">

            ₹{value}

          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
};

export default StatCard;