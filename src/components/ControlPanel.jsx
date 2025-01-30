import React from 'react';
import { Panel } from '@xyflow/react';
import ControlPanelButton from './ControlPanelButton';

const ControlPanel = ({ numNodes, setNumNodes, redraw }) => (
  <Panel position="top-right">
    <label htmlFor="numNodes" className="block text-sm/6 font-medium text-gray-900">
    Number of Employees
    </label>
    <div className="mt-1">
    <input 
        id="numNodes"
        name="numNodes"
        value={numNodes}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-md shadow-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        onChange={(e) => setNumNodes(parseInt(e.target.value) || 0)}
    />
    </div>
    <br />
    <ControlPanelButton onClick={() => redraw('TB')}>Redraw Vertical</ControlPanelButton>
    <br />
    <ControlPanelButton onClick={() => redraw('LR')}>Redraw Horizontal</ControlPanelButton>
  </Panel>
);

export default ControlPanel;