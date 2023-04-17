import axios from "axios";
import encryptMessage from "./encryptMessage";

async function postMessage(message, password) {
  try {
    const encryptedDataObj = await encryptMessage(message, password);
    const data = { encryptedContent: JSON.stringify(encryptedDataObj) };
    const newMessage = await axios.post(
      import.meta.env.VITE_APP_SERVER_URL + "/api/messages",
      data
    );
    console.log(newMessage);
    console.log(JSON.parse(newMessage.data.encryptedContent));
    return {
      messageId: newMessage.data._id,
      editId: newMessage.data.editId,
      messagePassword: password,
    };
  } catch (error) {
    throw Error(error);
  }
}

export default postMessage;
