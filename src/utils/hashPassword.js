import { arrayBufferToB64, b64ToArrayBuffer } from "./base64encoder";
import createKey from "./createKey";

async function hashPassword(password, optionalSalt) {
  // const loginKey = createKey(password, salt);
  const salt = optionalSalt
    ? await b64ToArrayBuffer(optionalSalt)
    : window.crypto.getRandomValues(new Uint8Array(16));
  console.log(
    "we are hashing password and password is",
    password,
    "and salt is",
    salt
  );
  const cryptoKeyObj = await createKey(password, salt);
  const uintLoginkey = await window.crypto.subtle.exportKey(
    "raw",
    cryptoKeyObj
  );
  console.log("we are hashing password and uint key is ", uintLoginkey);
  const loginKey = await arrayBufferToB64(uintLoginkey);

  console.log("we are hashing password and logind key is ", loginKey);
  const encSalt = await arrayBufferToB64(salt);
  console.log("loginKey", loginKey);
  return { password: loginKey, salt: encSalt };
}

export default hashPassword;
