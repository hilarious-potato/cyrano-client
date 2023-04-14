import { arrayBufferToB64, b64ToArrayBuffer } from "./base64encoder";

async function encryptMessage(message, password) {
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  // console.log("salt", salt);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  // console.log("iv:", iv);
  const encoder = new TextEncoder();
  const encoded_message = encoder.encode(message);
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
}

export default encryptMessage;
