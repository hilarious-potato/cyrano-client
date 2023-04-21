import axios from "axios";
import encryptMessage from "./encryptMessage";

async function postMessage(message, password, isEditable = false) {
  const postURL = isEditable ? "/api/messages/edit/" : "/api/messages/";
  try {
    const encryptedDataObj = await encryptMessage(message, password);
    const data = { encryptedContent: JSON.stringify(encryptedDataObj) };
    const newMessage = await axios.post(
      import.meta.env.VITE_APP_SERVER_URL + postURL,
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
