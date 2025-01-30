import React from 'react';

const ControlPanelButton = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="block w-full rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-gray-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {children}
  </button>
);

export default ControlPanelButton;