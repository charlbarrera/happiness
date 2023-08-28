// MotivationVisualizer.tsx

import { ScrollView } from "react-native";
import { useState } from "react";
import { Layout, Text, List, Input, Button, Card } from "@ui-kitten/components";
import SpaceStain from "../components/SpaceStain";
import { saveMood } from "../services/firebase";

const MOODS = ["Good", "Neutral", "Bad"] as const;

export const HomeScreen = () => {
  const [feedback, setFeedback] = useState("");

  const renderTaskItem = (info: any) => (
    <Card
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
      }}
    >
      <Text>{info.item}</Text>
    </Card>
  );

  const handleCheckInMood = (mood: string) => {
    /**
     * send it to firebase throw sdk
     */

    try {
      saveMood(mood);
    } catch (error) {}
  };

  return (
    <>
      <ScrollView
        // ocupy the whole width
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Layout style={{ flex: 1, padding: 10 }}>
          {/* 1. Upcoming Tasks */}
          <Text category="h5">Upcoming Tasks:</Text>
          <List
            data={["Task 1", "Task 2", "Task 3", "Task 4", "Task 6"]}
            renderItem={renderTaskItem}
          />

          {/* 2. Mood & Energy Check-in */}
          <Text category="h5">Mood & Energy Check-in:</Text>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {
              /**
               * loop thwrout the mood and energy
               */
              MOODS.map((mood) => {
                return (
                  <Button
                    key={mood}
                    status="basic"
                    onPress={() => handleCheckInMood(mood)}
                  >
                    {mood}
                  </Button>
                );
              })
            }
          </Layout>

          {/* 3. Feedback Prompt */}
          <Text category="h5" style={{ marginTop: 20 }}>
            Feedback Prompt:
          </Text>
          <Input
            style={{ marginTop: 10 }}
            value={feedback}
            onChangeText={setFeedback}
            placeholder="What did you learn today?"
          />

          {/* 4. Motivation Visualizer */}
          <Text category="h5" style={{ marginTop: 20 }}>
            Motivation Visualizer:
          </Text>
          {/* Insert the motivation visualizer component/code here */}

          {/* 5. Notifications Panel */}
          <Text category="h5" style={{ marginTop: 20 }}>
            Notifications:
          </Text>
          <List
            style={{ marginTop: 10 }}
            data={["Reminder 1", "Reminder 2", "Reminder 3", "Reminder 4"]}
            renderItem={renderTaskItem}
          />
        </Layout>
      </ScrollView>
      <SpaceStain />
    </>
  );
};
