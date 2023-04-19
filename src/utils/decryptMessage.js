import { b64ToArrayBuffer } from "./base64encoder";
import createKey from "./createKey";

async function decryptMessage(messageObj, password) {
  try {
    const parsedMessageObj = JSON.parse(messageObj);
    const decoder = new TextDecoder();
    const ciphertext = await b64ToArrayBuffer(
      parsedMessageObj.encryptedMessage
    );
    const iv = new Uint8Array(await b64ToArrayBuffer(parsedMessageObj.iv));
    const salt = new Uint8Array(await b64ToArrayBuffer(parsedMessageObj.salt));
    const key = await createKey(password, salt);

    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      ciphertext
    );
    const decryptedMessage = decoder.decode(decrypted);
    return decryptedMessage;
  } catch (error) {
    console.error(error);
  }
}

export default decryptMessage;
