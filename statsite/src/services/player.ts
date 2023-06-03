import { db } from "@/firebase";
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Player } from "@/models/player";

async function deleteOnePlayer(playerId: string): Promise<void> {
  try {
    const playerRef = doc(db, "player", playerId);
    await deleteDoc(playerRef);
    console.log("Player deleted successfully");
  } catch (error) {
    console.error("Error deleting player:", error);
  }
}
async function addPlayer(playerName: string) {
  try {
    const playersCollection = collection(db, "player");
    const newPlayerRef = await addDoc(playersCollection, {
      name: playerName,
      createdAt: new Date(),
    });
    console.log("New player added with ID:", newPlayerRef.id);
  } catch (error) {
    console.error("Error adding player:", error);
  }
}

async function getAllPlayers(): Promise<Player[]> {
  try {
    const players: Player[] = [];

    const playersCollection = collection(db, "player");
    const querySnapshot = await getDocs(playersCollection);

    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as Player;
      playerData.id = doc.ref.id
      players.push(playerData);
    });

    return players;
  } catch (error) {
    console.error("Error getting all players:", error);
  }

  return [];
}

export { addPlayer, getAllPlayers, deleteOnePlayer};
