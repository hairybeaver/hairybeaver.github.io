import { db } from "@/firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Player } from "@/models/player";



async function addTemplate(playerId: string, numbers: number[]) {
  try {
    const templatesCollection = collection(db, "template");

    // Convert the 2D array into an array of objects
    const numbersAsObjects = numbers.map((row) => ({ row }));

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

async function addSession(sessionName: string) {
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

async function addScore(
  gameId: number,
  playerId: number,
  templateId: number,
  order: number,
  score: number
) {
  try {
    const scoreCollection = collection(db, "score");
    const newScoreRef = await addDoc(scoreCollection, {
      createdAt: serverTimestamp(),
      gameId: gameId,
      playerId: playerId,
      templateId: templateId,
      order: order,
      score: score,
    });
    console.log("New score added with ID:", newScoreRef.id);
  } catch (error) {
    console.error("Error adding score:", error);
  }
}

export {addTemplate, addScore, addSession };
