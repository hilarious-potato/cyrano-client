import axios from "axios";
import encryptMessage from "./encryptMessage";

async function updateMessage(message, editId, password) {
  const putURL = "/api/messages/edit/" + editId;
  try {
    const encryptedDataObj = await encryptMessage(message, password);
    const data = { encryptedContent: JSON.stringify(encryptedDataObj) };
    const newMessage = await axios.put(
      import.meta.env.VITE_APP_SERVER_URL + putURL,
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

export default updateMessage;
