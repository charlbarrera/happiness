// MotivationVisualizer.tsx

import {ScrollView, View} from "react-native";
import MotivationVisualizer from "./motivationVisualizer";
import { Box, Text, FlatList, Input, Button, VStack, HStack } from "native-base";
import {useState} from "react";

export const HomeScreen = () => {
    const [feedback, setFeedback] = useState('');

    return (
        <ScrollView>
            <VStack space={5} p={4}>

                {/* 1. Upcoming Tasks */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Upcoming Tasks:</Text>
                    <FlatList
                        data={['Task 1', 'Task 2']} // replace with your data
                        renderItem={({ item }) => (
                            <Text p={2} borderBottomWidth={1} borderBottomColor="coolGray.200">
                                {item}
                            </Text>
                        )}
                    />
                </Box>

                {/* 2. Mood & Energy Check-in */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Mood & Energy Check-in:</Text>
                    <HStack space={2} mt={2}>
                        <Button onPress={() => {}}>Good</Button>
                        <Button onPress={() => {}}>Neutral</Button>
                        <Button onPress={() => {}}>Bad</Button>
                    </HStack>
                </Box>

                {/* 3. Feedback Prompt */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Feedback Prompt:</Text>
                    <Input
                        mt={2}
                        value={feedback}
                        onChangeText={(value) => setFeedback(value)}
                        placeholder="What did you learn today?"
                    />
                </Box>

                {/* 4. Motivation Visualizer */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Motivation Visualizer:</Text>
                    {/* Insert the motivation visualizer component/code here */}
                </Box>

                {/* 5. Notifications Panel */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Notifications:</Text>
                    <FlatList
                        mt={2}
                        data={['Reminder 1', 'Reminder 2']} // replace with your data
                        renderItem={({ item }) => (
                            <Text p={2} borderBottomWidth={1} borderBottomColor="coolGray.200">
                                {item}
                            </Text>
                        )}
                    />
                </Box>
            </VStack>
        </ScrollView>
    );
};
