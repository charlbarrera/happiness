import { SkillsGraph } from "./types/skill.types";

export const initialSkills: SkillsGraph = {
  nodes: [
    {
      id: 1,
      name: "Social Skills",
      lastUsedTimestamp: Date.now(),
      strength: 50,
      x: 150,
      y: 250,
    },
    {
      id: 2,
      name: "Leadership",
      lastUsedTimestamp: Date.now(),
      strength: 40,
      x: 450,
      y: 250,
    },
    {
      id: 3,
      name: "Communication",
      lastUsedTimestamp: Date.now(),
      strength: 30,
      x: 300,
      y: 250,
    },
    {
      id: 4,
      name: "Teamwork",
      lastUsedTimestamp: Date.now(),
      strength: 20,
      x: 300,
      y: 600,
    },
    {
      id: 5,
      name: "Problem Solving",
      lastUsedTimestamp: Date.now(),
      strength: 10,
      x: 800,
      y: 800,
    },
  ],
  edges: [
    { source: 1, target: 2, influence: 0.2 },
    { source: 1, target: 3, influence: 0.2 },
    { source: 1, target: 4, influence: 0.2 },
    { source: 1, target: 5, influence: 0.2 },
    { source: 2, target: 3, influence: 0.2 },
    { source: 2, target: 4, influence: 0.2 },
    { source: 2, target: 5, influence: 0.2 },
    { source: 3, target: 4, influence: 0.2 },
    { source: 3, target: 5, influence: 0.2 },
    { source: 4, target: 5, influence: 0.2 },
  ],
};
