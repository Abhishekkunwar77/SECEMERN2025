import { useCallback } from 'react';
import { CustomNode, CustomEdge, LayoutDirection } from '../utils/types';
import generateTeamNodesAndEdges from '../utils/generateTeamNodesAndEdges';
import getLayoutedElements from '../utils/getLayoutedElements';

interface UseRedrawHook {
  (setNodes: React.Dispatch<React.SetStateAction<CustomNode[]>>, 
   setEdges: React.Dispatch<React.SetStateAction<CustomEdge[]>>, 
   numNodes: number): (direction: LayoutDirection) => void;
}

const useRedraw: UseRedrawHook = (setNodes, setEdges, numNodes) => {
  return useCallback(
    (direction: LayoutDirection) => {
      const { nodes: initialNodes, edges: initialEdges } = generateTeamNodesAndEdges(numNodes, direction);
      const layoutedElements = getLayoutedElements(initialNodes, initialEdges, direction);

      setNodes(layoutedElements.nodes);
      setEdges(layoutedElements.edges);
    },
    [setNodes, setEdges, numNodes]
  );
};

export default useRedraw;
