import { useRef, useEffect } from "react";
import Typed from "typed.js";

const spinnerText = {
  home: [
    "<span class='text-primary italic'>cyrano</span> welcomes you!🥳",
    "<span class='text-primary italic'>cyrano</span> encrypts your message.",
    "<span class='text-primary italic'>cyrano</span> sends your message.",
    "<span class='text-primary italic'>cyrano</span> doesn’t read your message.",
    "<span class='text-primary italic'>cyrano</span> allows others to read your message.",
    "<span class='text-primary italic'>cyrano</span> allows others to edit your message.",
    "<span class='text-primary italic'>cyrano</span> would to spell check your message,",
    "but it cant, because",
    "<span class='text-primary italic'>cyrano</span> doesn’t read your message!😉",
  ],
  decrypt: [
    "... decrypting!", // English
    "...解密", // Chinese (Simplified)
    "...解密", // Chinese (Traditional)
    "...расшифровка", // Russian
    "...decriptare", // Italian
    "...desencriptar", // Spanish
    "...decryptage", // French
    "...entschlüsseln", // German
    "...descriptografar", // Portuguese
    "...dekryptering", // Danish
    "...dešifrování", // Czech
    "...dekryptering", // Swedish
    "...dekryptointi", // Finnish
    "...entschlüsselung", // German (Switzerland)
    "...dekryptering", // Norwegian
    "...dešifriranje", // Croatian
    "...розшифрування", // Ukrainian
    "...entschlüsslung", // Luxembourgish
    "...entschlësselung", // Luxembourgish (variant)
    "...დეშიფრება", // Georgian
    "...decrypteren", // Dutch
    "...desifruojant", // Lithuanian
    "...расшифроўка", // Belarusian
    "...розшифровка", // Ukrainian (variant)
    "...dešifriranje", // Bosnian
    "...расшифраване", // Bulgarian
    "...decryptarea", // Romanian
    "...dekódolás", // Hungarian
    "...расшифровывание", // Russian (variant)
    "...dešifrovanje", // Serbian
    "...расшифрыванне", // Belarusian (variant)
    "...deszyfrowanie", // Polish
    "...dešifriranje", // Slovenian
    "...decryptáció", // Hungarian (variant)
    "...dešifriranje", // Serbian (variant)
    "...desifruojant", // Latvian
    "...deszyfrowanie", // Polish (variant)
    "...расшифровка", // Kazakh
    "...dešifrování", // Slovak
    "...dekryptering", // Norwegian (variant)
    "...decryptage", // French (Canada)
    "...დეშიფრვა", // Georgian (variant)
    "...dekryptavimas", // Lithuanian (variant)
    "...расшифровывание", // Russian (variant 2)
    "...dekryptavimas", // Lithuanian (variant 2)
    "...розшифрування", // Ukrainian (variant 2)
    "...desifrovanje", // Bosnian (variant)
    "...расшыфраванне", // Belarusian (variant 2)
    "...ապակոդավորում", // Armenian
    "...decryptaj", // Esperanto
    "...desencriptació", // Catalan
    "...פענוח", // Hebrew
    "...decryptage", // French (Switzerland)
    "...dekriptim", // Albanian
    "...deszyfracja", // Polish (variant 2)
    "...decifrare", // Romanian (variant)
    "...解読", // Japanese
  ],
  encrypt: [
    "...加密", // Chinese (Simplified)
    "...加密", // Chinese (Traditional)
    "...шифрование", // Russian
    "...crittografia", // Italian
    "...encriptando", // Spanish
    "...chiffrement", // French
    "...verschlüsseln", // German
    "...criptografando", // Portuguese
    "...kryptering", // Danish
    "...šifrování", // Czech
    "...kryptering", // Swedish
    "...salaaminen", // Finnish
    "...verschlüsselung", // German (Switzerland)
    "...kryptering", // Norwegian
    "...šifriranje", // Croatian
    "...шифрування", // Ukrainian
    "...verschlësselung", // Luxembourgish
    "...verschlësselung", // Luxembourgish (variant)
    "...ენკრიპტვა", // Georgian
    "...versleutelen", // Dutch
    "...šifruojant", // Lithuanian
    "...шифраванне", // Belarusian
    "...шифрування", // Ukrainian (variant)
    "...šifriranje", // Bosnian
    "...криптиране", // Bulgarian
    "...criptarea", // Romanian
    "...kódolás", // Hungarian
    "...шифрование", // Russian (variant)
    "...шифрирање", // Serbian
    "...шифраванне", // Belarusian (variant)
    "...szyfrowanie", // Polish
    "...šifriranje", // Slovenian
    "...kódolás", // Hungarian (variant)
    "...шифрирање", // Serbian (variant)
    "...šifruojant", // Latvian
    "...szyfrowanie", // Polish (variant)
    "...құпиялау", // Kazakh
    "...šifrovanie", // Slovak
    "...kryptering", // Norwegian (variant)
    "...chiffrement", // French (Canada)
    "...ენკრიპტირება", // Georgian (variant)
    "...šifruoti", // Lithuanian (variant)
    "...шифрование", // Russian (variant 2)
    "...šifruoti", // Lithuanian (variant 2)
    "...шифрування", // Ukrainian (variant 2)
    "...šifrovanje", // Bosnian (variant)
    "...шыфраванне", // Belarusian (variant 2)
    "...ծածկագրում", // Armenian
    "...enŝifrado", // Esperanto
    "...xifrat", // Catalan
    "...הצפנה", // Hebrew
    "...chiffrement", // French (Switzerland)
    "...kriptimi", // Albanian
    "...szyfrowanie", // Polish (variant 2)
    "...criptare", // Romanian (variant)
    "...暗号化", // Japanese
  ],
};

const Spinner = (props) => {
  // Create reference to store the DOM element containing the animation
  const typedOutput = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: spinnerText[props.context],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(typedOutput.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="Spinner flex-column m-auto flex min-h-full justify-center">
      <span ref={typedOutput} />
      <span className="typed-cursor" />
    </div>
  );
};

export default Spinner;
