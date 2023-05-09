import { db } from './firebase';
import { collection, getDocs,addDoc } from "firebase/firestore";

import {
  addPlayer,
  addTemplate,
  addSession,
  addScore,
} from './services/firebaseService';




async function testFirebaseConnection() {
  console.log("Testing Firebase connection...");

  // Test addPlayer()
  const playerName = 'John Doe';
  console.log(`Adding player: ${playerName}`);
  await addPlayer(playerName);
  await addTemplate("examplePlayerId", [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  await addSession("sessionName");
  await addScore("gameId","playerId","templateId",1,1);

  try {
    const playersCollection = collection(db, "player");
    const playersSnapshot = await getDocs(playersCollection);

    console.log("Players in Firestore:");
    playersSnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });

    console.log("Firebase connection test completed");
  } catch (error) {
    console.error("Error testing Firebase connection:", error);
  }
}


testFirebaseConnection();