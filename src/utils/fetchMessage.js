import axios from "axios";
import decryptMessage from "./decryptMessage";

async function fetchMessage(id, password) {
  try {
    console.log("We are now in fetchMessage Method");
    const messageFromDb = await axios.get(
      import.meta.env.VITE_APP_SERVER_URL + "/api/messages/" + id
    );
    if (messageFromDb) {
      console.log(messageFromDb);
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
