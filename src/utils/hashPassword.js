import { arrayBufferToB64, b64ToArrayBuffer } from "./base64encoder";
import createKey from "./createKey";

async function hashPassword(password, optionalSalt) {
  // const loginKey = createKey(password, salt);
  const salt = optionalSalt
    ? await b64ToArrayBuffer(optionalSalt)
    : window.crypto.getRandomValues(new Uint8Array(16));
  const loginKey = await arrayBufferToB64(await createKey(password, salt));
  const encSalt = await arrayBufferToB64(salt);
  console.log("loginKey", loginKey);
  return { password: loginKey, salt: encSalt };
}

export default hashPassword;
