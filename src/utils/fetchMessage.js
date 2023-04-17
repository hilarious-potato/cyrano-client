import axios from "axios";
import decryptMessage from "./decryptMessage";

async function fetchMessage(id, password) {
  try {
    console.log("We are now in fetchMessage Method");
    const messageFromDb = await axios.get(
      import.meta.env.VITE_APP_SERVER_URL + "/api/messages/" + id
    );
    console.log(messageFromDb);
    const decryptedMessage = await decryptMessage(
      messageFromDb.data.encryptedContent,
      password
    );
    return decryptedMessage;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMessage;
