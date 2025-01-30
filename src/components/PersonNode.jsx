import { Handle, Position } from "@xyflow/react";

function PersonNode({ data, isConnectable }) {
  const targetPosition = data.direction === 'TB' ? Position.Top : Position.Left;
  const sourcePosition = data.direction === 'TB' ? Position.Bottom : Position.Right;
  
  return (
    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-md shadow-gray-600 sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
      <div className="flex-shrink-0">
        <img alt="" src={data.imageUrl} className="h-10 w-10 rounded-full" />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="text-sm font-medium text-gray-900">{data.name}</p>
          <p className="truncate text-sm text-gray-500">{data.role}</p>
        </a>
      </div>
      <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
    </div>
  );
}

export default PersonNode;