function generatePassword() {
  const array = new Uint8Array(20);
  window.crypto.getRandomValues(array);
  console.log(array);

  const password = Array.from(array)
    .map((i) => i.toString(16).padStart(2, "0"))
    .join("");

  return password;
}

export default generatePassword;
