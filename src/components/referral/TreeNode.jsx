const TreeNode = ({ node }) => {
  return (
    <div className="ml-6 mt-4">

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">

        <h3 className="font-semibold">

          {node.name}

        </h3>

        <p className="text-sm text-gray-500">

          {node.email}

        </p>

      </div>

      {node.children?.length > 0 && (
        <div className="ml-6 border-l-2 border-blue-300 pl-4">

          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default TreeNode;