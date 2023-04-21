import { arrayBufferToB64, b64ToArrayBuffer } from "./base64encoder";
import createKey from "./createKey";

async function encryptMessage(message, password) {
  try {
    const encoder = new TextEncoder();
    const encoded_message = encoder.encode(message);
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const key = await createKey(password, salt);

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      encoded_message
    );

    const encryptedMessage = await arrayBufferToB64(ciphertext);
    const encodedSalt = await arrayBufferToB64(salt);
    const encodedIV = await arrayBufferToB64(iv);

    return {
      encryptedMessage,
      iv: encodedIV,
      salt: encodedSalt,
    };
  } catch (error) {
    console.error(error);
  }
}

export default encryptMessage;
