import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";

import styles from "./style";

const Stack = createNativeStackNavigator();

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Écran Home
function Home({ navigation }: any) {
  function showAlert() {
    Alert.alert("Information", "Long press to start the game");
  }

  return (
    <View style={styles.container} >
      <Pressable
        style={styles.startButton}
        onPress={showAlert}
        onLongPress={() => navigation.navigate("Game")
        }
      >
        <Text style={styles.whiteText}> Start game! </Text>
      </Pressable>
    </View>
  );
}

// Écran Game
function Game({ navigation }: any) {
  const [baseNumber] = useState(randomNumber());
  const [score] = useState(randomNumber());

  function checkAnswer(choice: string) {
    let won = false;

    if (choice === "higher" && score > baseNumber) {
      won = true;
    }

    if (choice === "lower" && score < baseNumber) {
      won = true;
    }

    navigation.navigate("Result", {
      won: won,
      baseNumber: baseNumber,
      score: score,
    });
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title}> Starting: {baseNumber} </Text>

      < Pressable
        style={[styles.gameButton, styles.higher]}
        onPress={() => checkAnswer("higher")
        }
      >
        <Text style={styles.whiteText}> Higher </Text>
      </Pressable>

      < Pressable
        style={[styles.gameButton, styles.lower]}
        onPress={() => checkAnswer("lower")}
      >
        <Text style={styles.whiteText}> Lower </Text>
      </Pressable>
    </View>
  );
}

// Écran Result
function Result({ route }: any) {
  const { won, baseNumber, score } = route.params;

  return (
    <View style={styles.container} >
      <Text style={styles.resultText}>
        {won ? "You've won" : "You've lost"}
        {"\n"}
        baseNumber was {baseNumber} and score {score}
      </Text>

      {won && <Text style={styles.trophy}>🏆</Text>}
    </View>
  );
}

// Navigation principale
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Game"
          component={Game}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Result"
          component={Result}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}