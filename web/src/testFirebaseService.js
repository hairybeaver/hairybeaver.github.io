import { db } from './firebase';
import { collection, getDocs,addDoc } from "firebase/firestore";

import {
  addPlayer,
  addTemplate,
  addScore,
  addSession,
  getPlayer,
  getTemplate,
  getSession,
  getScore,
  getAllPlayers,
  getAllTemplates,
  getAllSessions,
  getAllScores
} from './services/firebaseService';




async function testFirebaseConnectionAdd() {
  console.log("Testing Firebase connection...");

  // Test addPlayer()
  await addPlayer({name: "Bicep arne"});
  await addTemplate({ playerId:"examplePlayerId2",cards: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 19]
  ]});
  await addSession({name:"sessionName"});
  await addScore({sessionId:"gameId",playerId:"playerId",templateId:"templateId",score:1,order:1});

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

async function testFirebaseConnectionGet(){
  getPlayer("2EiHtKI5TTB40Rj6KPz9")
  getAllPlayers().then(players => console.log(players));
}

//node -r esm src/testFirebaseService.js


//testFirebaseConnectionAdd();
testFirebaseConnectionGet();