import { db } from '../firebase.js';
import { collection, getDocs,addDoc,serverTimestamp } from "firebase/firestore";

async function addPlayer(playerName) {
  try {
    const playersCollection = collection(db, "player");
    const newPlayerRef = await addDoc(playersCollection, {
      name: playerName,
      createdAt: serverTimestamp(),
    });
    console.log("New player added with ID:", newPlayerRef.id);
  } catch (error) {
    console.error("Error adding player:", error);
  }
}

async function addTemplate(playerId, numbers) {
  try {
    const templatesCollection = collection(db, "template");

    // Convert the 2D array into an array of objects
    const numbersAsObjects = numbers.map(row => ({ row }));


    const newTemplateRef = await addDoc(templatesCollection, {
      playerId: playerId,
      cards: numbersAsObjects,
      createdAt: serverTimestamp(),
    });
    console.log("New template added with ID:", newTemplateRef.id);
  } catch (error) {
    console.error("Error adding template:", error);
  }
}

async function addSession(sessionName) {
  try {
    const sessionCollection = collection(db, "session");
    const newSessionRef = await addDoc(sessionCollection, {
      name: sessionName,
      createdAt: serverTimestamp(),
    });
    console.log("New session added with ID:", newSessionRef.id);
  } catch (error) {
    console.error("Error adding session:", error);
  }
}

async function addScore(gameId,playerId,templateId,volgorde,score) {
  try {
    const scoreCollection = collection(db, "score");
    const newScoreRef = await addDoc(scoreCollection, {
      createdAt: serverTimestamp(),
      gameId: gameId,
      playerId: playerId,
      templateId: templateId,
      volgorde: volgorde,
      score: score
    });
    console.log("New score added with ID:", newScoreRef.id);
  } catch (error) {
    console.error("Error adding score:", error);
  }
}

export {
  addPlayer,
  addTemplate,
  addScore,
  addSession,
};
