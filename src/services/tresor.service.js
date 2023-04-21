import axios from "axios";
import { arrayBufferToB64 } from "../utils/base64encoder";
import decryptMessage from "../utils/decryptMessage";
import encryptMessage from "../utils/encryptMessage";
class TresorServices {
  constructor(user) {
    this.tresorKey = null;
    this.unencryptedTresors = [];
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }
  // initiate() {
  //   const userTresorsInLS = localStorage.get(this.user);
  //   if (userTresorsInLS) {
  //     this.unencryptedTresors.push([...userTresorsInLS]);
  //   }
  // }
  // async fetch() {
  //   const tresorIds = user.tresors;
  //   const
  // }

  fetchUserList = async () => {
    const tresorList = await this.api.get("/api/tresors");
    return tresorList.data.tresors;
  };
  create = async (title) => {
    try {
      if (!title) {
        console.log("provide title");
        return;
      }
      const userPassword = localStorage.getItem("hashedPassword");
      const salt = await arrayBufferToB64(
        window.crypto.getRandomValues(new Uint8Array(16))
      );
      const data = { title, messages: "empty", salt };
      const newTresor = await this.api.post("/api/tresors", data);
      return newTresor;
    } catch (error) {
      console.error(error);
    }
  };
  fetchTresor = async (tresorId) => {
    try {
      const tresorFromDB = await this.api.get("/api/tresors/" + tresorId);
      if (tresorFromDB.data.messages === "empty") {
        const messages = [];
        return { ...tresorFromDB.data, messages };
      } else {
        const password = localStorage.getItem("hashedPassword");

        const messagesJSON = await decryptMessage(
          tresorFromDB.data.messages,
          password
        );
        const messages = JSON.parse(messagesJSON);
        return { ...tresorFromDB.data, messages };
      }
    } catch (error) {
      console.error(error);
    }
  };
  pushItem = async (tresorId, item) => {
    const { messages } = await this.fetchTresor(tresorId);
    const messageInArray = messages.some((message) => {
      return message.messageId === item.messageId ? true : false;
    });
    if (messageInArray) {
      console.log("allready included no need to push");
      return "Message allready included in tresor";
    } else {
      console.log("item is new!");
    }
    messages.push(item);
    const password = localStorage.getItem("hashedPassword");
    const messagesJSON = JSON.stringify(messages);
    const encryptedMessages = JSON.stringify(
      await encryptMessage(messagesJSON, password)
    );
    const data = { messages: encryptedMessages };
    return await this.api.put("/api/tresors/" + tresorId, data);
  };
  removeMessage = async (tresorId, messageId) => {
    const { messages } = await this.fetchTresor(tresorId);
    const messageIndex = messages.findIndex(
      (message) => message.messageId === messageId
    );
    if (messageIndex === -1) {
      return "message not found";
    }
    messages.splice(messageIndex, 1);

    const password = localStorage.getItem("hashedPassword");
    const messagesJSON = JSON.stringify(messages);
    const encryptedMessages = JSON.stringify(
      await encryptMessage(messagesJSON, password)
    );
    const data = { messages: encryptedMessages };
    return await this.api.put("/api/tresors/" + tresorId, data);
  };
  deleteTresor = async (tresorId) => {
    if (tresorId) {
      return await this.api.delete("/api/tresors/" + tresorId);
    }
    console.log("Hey, we need a tresor Id");
  };
}

const tresorService = new TresorServices();
export default tresorService;
