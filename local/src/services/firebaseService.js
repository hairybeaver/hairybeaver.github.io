import { db } from '../firebase.js';
import { collection,doc,getDoc,getDocs,addDoc,serverTimestamp} from "firebase/firestore";


//generalised functions
async function addDocument(collectionName, data) {
  try {
    const collectionRef = collection(db, collectionName);
    const newDocRef = await addDoc(collectionRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log(`New document added in ${collectionName} with ID:`, newDocRef.id);
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error);
  }
}

async function getDocument(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log(`Document data from ${collectionName}:`, docSnapshot.data());
      return docSnapshot.data();
    } else {
      console.log(`No such document in ${collectionName}!`);
    }
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
  }
}

async function getAllDocuments(collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(`All documents from ${collectionName}:`, documents);
    return documents;
  } catch (error) {
    console.error(`Error getting all documents from ${collectionName}:`, error);
  }
}

// Add functions
async function addPlayer(data) {
  addDocument("player",data)
}

async function addTemplate(template) {
  // Convert the 2D array into an array of objects
  template['cards'] = template['cards'].map(row => ({ row }));
  addDocument("template",template)
}

async function addSession(session) {
  addDocument("session",session)
}

async function addScore(score) {
  addDocument("score",score)
}

//Get :id functions
async function getPlayer(playerId) {
  return getDocument("player",playerId)
}

async function getTemplate(templateId) {
  return getDocument("template",templateId)
}

async function getSession(sessionId) {
  return getDocument("session",sessionId)
}

async function getScore(scoreId) {
  return getDocument("score",scoreId)
}

//get all
async function getAllPlayers() {
  return getAllDocuments("player")
}

async function getAllTemplates() {
  return getAllDocuments("template")
}

async function getAllSessions() {
  return getAllDocuments("session")
}

async function getAllScores() {
  return getAllDocuments("score")
}

export {
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
};
