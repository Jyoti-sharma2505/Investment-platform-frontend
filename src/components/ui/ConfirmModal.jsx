const ConfirmModal = ({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-6 w-96">

        <h2 className="text-xl font-bold">

          {title}

        </h2>

        <p className="mt-3 text-gray-600">

          {message}

        </p>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
};

export default ConfirmModal;