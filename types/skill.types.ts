// types.ts
export type SkillNode = {
    id: number;
    name: string;
    lastUsedTimestamp: number;
    strength: number;
    x: number;
    y: number;
};

type SkillEdge = {
    source: number;
    target: number;
    influence: number;
};

export type SkillsGraph = {
    nodes: SkillNode[];
    edges: SkillEdge[];
};
