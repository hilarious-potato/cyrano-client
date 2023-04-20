import axios from "axios";
import encryptMessage from "./encryptMessage";

async function updateMessage(message, editId, password) {
  const putURL = "/api/messages/edit/" + editId;
  console.log("this is update message", message, editId);
  try {
    const encryptedDataObj = await encryptMessage(message, password);
    const data = { encryptedContent: JSON.stringify(encryptedDataObj) };
    console.log(data);
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
