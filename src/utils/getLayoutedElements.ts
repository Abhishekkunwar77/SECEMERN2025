import Dagre from '@dagrejs/dagre';
import { CustomNode, CustomEdge, LayoutDirection } from './types';

const nodeWidth = 300;
const nodeHeight = 90;

const getLayoutedElements = (nodes: CustomNode[], edges: CustomEdge[], direction: LayoutDirection): { nodes: CustomNode[], edges: CustomEdge[] } => {
  const graph: any = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: direction });

  edges.forEach((edge) => graph.setEdge(edge.source, edge.target));
  nodes.forEach((node) => 
    graph.setNode(node.id, {
      ...node,
      width: nodeWidth,
      height: nodeHeight,
    }),
  );

  Dagre.layout(graph);

  const layoutedNodes = nodes.map((node) => {
    const position = graph.node(node.id);
    return {
      ...node,
      position: { x: position.x - nodeWidth / 2, y: position.y - nodeHeight / 2 },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export default getLayoutedElements;
