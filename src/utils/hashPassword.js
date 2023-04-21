import { arrayBufferToB64, b64ToArrayBuffer } from "./base64encoder";
import createKey from "./createKey";

async function hashPassword(password, optionalSalt) {
  // const loginKey = createKey(password, salt);
  const salt = optionalSalt
    ? await b64ToArrayBuffer(optionalSalt)
    : window.crypto.getRandomValues(new Uint8Array(16));

  const cryptoKeyObj = await createKey(password, salt);
  const uintLoginkey = await window.crypto.subtle.exportKey(
    "raw",
    cryptoKeyObj
  );
  const loginKey = await arrayBufferToB64(uintLoginkey);

  const encSalt = await arrayBufferToB64(salt);
  return { password: loginKey, salt: encSalt };
}

export default hashPassword;
