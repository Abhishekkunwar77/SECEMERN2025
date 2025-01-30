export interface NodeData {
  name: string;
  role: string;
  imageUrl: string;
  isManager: boolean;
  level: number;
  direction: string;
}

export interface CustomNode {
  id: string;
  width: number;
  type: string;
  data: NodeData;
  position?: { x: number; y: number }; 
}

export interface CustomEdge {
  id: string;
  source: string;
  target: string;
}

export type LayoutDirection = 'LR' | 'TB';