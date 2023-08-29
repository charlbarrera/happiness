import React, { useRef, useState } from "react";
import { StyleSheet, Button, Text, View, PanResponder } from "react-native";
import { Circle, Line, Svg } from "react-native-svg";
import { SkillNode, SkillsGraph } from "../../types/skill.types";
import {initialSkills} from "../../data";

const getSkillById = (id: number, skills: SkillsGraph) => {
  return skills.nodes.find((skill) => skill.id === id);
};

const calculateStrokeWidth = (source: SkillNode, target: SkillNode) => {
  const averageStrength = (source.strength + target.strength) / 2;
  const baseStroke = 1;
  return baseStroke + (averageStrength / 100) * 2; // Adjust this formula as needed
};

const calculateRadius = (strength: number) => {
  const baseRadius = 10;
  return baseRadius + (strength / 100) * 10; // Adjust this formula as needed
};
const MotivationVisualizer: React.FC = () => {
  const [skills, setSkills] = useState<SkillsGraph>(initialSkills);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        setTranslate({
          x: translate.x + gestureState.dx,
          y: translate.y + gestureState.dy,
        });
      },
      onPanResponderRelease: () => {
        // You can reset the position or implement other logic on release.
      },
    }),
  ).current;

  const strengthenConnection = (skillId: number, incrementValue: number) => {
    let updatedSkills = [...skills.nodes];

    // Directly strengthen the selected skill
    updatedSkills = updatedSkills.map((skill) => {
      if (skill.id === skillId) {
        return { ...skill, strength: skill.strength + incrementValue };
      }
      return skill;
    });

    // Indirectly strengthen related skills
    skills.edges.forEach((edge) => {
      if (edge.source === skillId) {
        const influence = edge.influence;
        updatedSkills = updatedSkills.map((skill) => {
          if (skill.id === edge.target) {
            return {
              ...skill,
              strength: skill.strength + incrementValue * influence,
            };
          }
          return skill;
        });
      }
    });

    setSkills((prevSkills: SkillsGraph) => ({
      ...prevSkills,
      nodes: updatedSkills,
    }));
  };

  //const maxX = Math.max(...skills.nodes.map((node) => node.x)) + 50; // +50 for some padding
  //const maxY = Math.max(...skills.nodes.map((node) => node.y)) + 50; // +50 for

  return (
    <View style={styles.container}>
      <Text>Motivation Visualizer 2</Text>
      <View {...panResponder.panHandlers} style={styles.container}>
        {/* SVG Container */}
        <Svg
          height="1000"
          width="1000"
          style={[
            styles.svgContainer,
            {
              transform: [
                { translateX: translate.x },
                { translateY: translate.y },
              ],
            },
          ]}
        >
          {skills.edges.map((edge, index) => {
            const sourceNode = skills.nodes.find((n) => n.id === edge.source)!;
            const targetNode = skills.nodes.find((n) => n.id === edge.target)!;
            return (
              <Line
                key={index}
                x1={getSkillById(edge.source, skills)?.x}
                y1={getSkillById(edge.source, skills)?.y}
                x2={getSkillById(edge.target, skills)?.x}
                y2={getSkillById(edge.target, skills)?.y}
                stroke="#D3D3D3"
                strokeWidth={calculateStrokeWidth(sourceNode, targetNode)}
              />
            );
          })}

          {skills.nodes.map((node, index) => (
            <Circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={calculateRadius(node.strength)}
              stroke="black"
              strokeWidth="2.5"
              fill={node.strength > 50 ? "green" : "red"}
            />
          ))}
        </Svg>

        {/* Sample button to strengthen a connection */}
      </View>
      <Button
        title="Strengthen Social Skills"
        onPress={() => strengthenConnection(1, 10)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  svgContainer: {
    marginBottom: 20,
  },
});
export default MotivationVisualizer;
