import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditMessage(props) {
  const { editId } = useParams();
  console.log("editId: ", editId);

  //   const [message, setMessage] = useState(null);
  //   const [password, setPassword] = useState("");
  //   const [showDialog, setShowDialog] = useState(true);
  //   const typedOutput = useRef(null);

  //   useEffect(() => {
  //     const fragment = window.location.hash;
  //     if (fragment) {
  //       setPassword(fragment.slice(1));
  //       // console.log("extracted pw");
  //     }
  //   }, []);

  //   const toggleDialog = () => {
  //     setShowDialog((prevState) => !prevState);
  //   };

  //   const getMessage = async (e) => {
  //     e.preventDefault();
  //     setMessage(null);
  //     try {
  //       // console.log("Lets get the message");
  //       const messageFromDb = await fetchMessage(messageId, password);
  //       // console.log(messageFromDb);
  //       setMessage(messageFromDb);
  //       toggleDialog();
  //       renderMessage(messageFromDb);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return <div>EditMessage</div>;
}
