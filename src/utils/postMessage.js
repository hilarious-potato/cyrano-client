import axios from "axios";
import encryptMessage from "./encryptMessage";

async function postMessage(message, password) {
  console.log("this is post message", message, password);
  try {
    const encryptedDataObj = await encryptMessage(message, password);
    const data = { encryptedContent: JSON.stringify(encryptedDataObj) };
    console.log(data);
    const newMessage = await axios.post(
      import.meta.env.VITE_APP_SERVER_URL + "/api/messages",
      data
    );
    return {
      messageId: newMessage.data._id,
      editId: newMessage.data.editId,
      messagePassword: password,
    };
  } catch (error) {
    console.error(error);
  }
}

export default postMessage;
