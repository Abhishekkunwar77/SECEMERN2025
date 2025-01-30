import React, { useCallback, useState } from 'react';
import { 
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import PersonNode from './components/PersonNode';
import ControlPanel from './components/ControlPanel';
import generateTeamNodesAndEdges from './utils/generateTeamNodesAndEdges';
import getLayoutedElements from './utils/getLayoutedElements';
import useRedraw from './hooks/useRedraw';
 
const nodeTypes = { personNode: PersonNode };
const startingNodes = 20;

export default function App() {
  const proOptions = { hideAttribution: true };

  const [numNodes, setNumNodes] = useState(startingNodes);
  const { nodes: initialNodes, edges: initialEdges } = generateTeamNodesAndEdges(numNodes, 'LR');
  const layoutedElements = getLayoutedElements(initialNodes, initialEdges, 'LR');

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedElements.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedElements.edges);

  const redraw = useRedraw(setNodes, setEdges, numNodes);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={[15, 15]}
        proOptions={proOptions}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        <ControlPanel numNodes={numNodes} setNumNodes={setNumNodes} redraw={redraw} />
      </ReactFlow>
    </div>
  );
}