import { faker } from '@faker-js/faker';
import { CustomNode, CustomEdge, LayoutDirection } from './types';

const nodeWidth = 300;

const generateTeamNodesAndEdges = (numNodes: number, direction: LayoutDirection): { nodes: CustomNode[], edges: CustomEdge[] } => {
  const nodes: CustomNode[] = [];
  const edges: CustomEdge[] = [];
  let numNodesLeft = numNodes;
  let nextNodeId = 0;
  const levels: CustomNode[][] = [];

  while (numNodesLeft > 0) {
    if (levels.length === 0) {
      // CEO node
      const node: CustomNode = {
        id: nextNodeId.toString(),
        width: nodeWidth,
        type: 'personNode',
        data: { 
          name: faker.person.fullName(),
          role: 'CEO',
          imageUrl: faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'people' }),
          isManager: true,
          level: 0,
          direction: direction,
        },
      };
      nodes.push(node);
      levels.push([node]);
      nextNodeId += 1;
      numNodesLeft -= 1;
    } else {
      // Non-CEO nodes
      const currentLevelNodes: CustomNode[] = [];
      const managers = levels[levels.length - 1];
      for (let manager of managers) {
        if (numNodesLeft <= 0) break;
        const numReports = Math.min(Math.floor(Math.random() * 7) + 1, numNodesLeft);
        for (let j = 0; j < numReports; j++) {
          if (nextNodeId >= numNodes) break;
          const node: CustomNode = {
            id: nextNodeId.toString(),
            width: nodeWidth,
            type: 'personNode',
            data: { 
              name: faker.person.fullName(),
              role: faker.person.jobTitle(),
              imageUrl: faker.image.urlLoremFlickr({ width: 200, height: 200, category: 'people' }),
              level: levels.length,
              direction: direction,
              isManager: false,
            },
          };
          nodes.push(node);
          edges.push({
            id: `e${manager.id}-${node.id}`,
            source: manager.id,
            target: node.id,
          });
          currentLevelNodes.push(node);
          nextNodeId += 1;
          numNodesLeft -= 1;
        }
      }
      if (currentLevelNodes.length > 0) {
        const maxManagerLevel = 2; 
        currentLevelNodes.forEach(node => {
          node.data.isManager = levels.length <= maxManagerLevel;
        });
        levels.push(currentLevelNodes);
      } else {
        break;
      }
    }
  }
  return { nodes, edges };
};

export default generateTeamNodesAndEdges;
