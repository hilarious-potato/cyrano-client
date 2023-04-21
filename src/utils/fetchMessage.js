import axios from "axios";
import decryptMessage from "./decryptMessage";

async function fetchMessage(id, password, isEditable = false) {
  const fetchURL = isEditable ? "/api/messages/edit/" : "/api/messages/";
  try {
    const messageFromDb = await axios.get(
      import.meta.env.VITE_APP_SERVER_URL + fetchURL + id
    );

    if (messageFromDb) {
      const decryptedMessage = await decryptMessage(
        messageFromDb.data.encryptedContent,
        password
      );
      if (decryptedMessage) {
        return decryptedMessage;
      }
      return "Wrong Password";
    } else {
      return "Message not found on server";
    }
  } catch (error) {
    console.error(error);
  }
}

export default fetchMessage;
