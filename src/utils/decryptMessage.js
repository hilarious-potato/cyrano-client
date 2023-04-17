import { b64ToArrayBuffer } from "./base64encoder";

async function decryptMessage(messageObj, password) {
  try {
    const parsedMessageObj = JSON.parse(messageObj);
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const ciphertext = await b64ToArrayBuffer(
      parsedMessageObj.encryptedMessage
    );
    const iv = new Uint8Array(await b64ToArrayBuffer(parsedMessageObj.iv));
    const salt = new Uint8Array(await b64ToArrayBuffer(parsedMessageObj.salt));
    console.log(ciphertext, iv, salt);
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );
    const key = await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 10000,
        hash: "SHA-256",
      },
      keyMaterial,
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );

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
