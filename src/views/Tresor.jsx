import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tresorService from "../services/tresor.service";
import Outputfield from "../components/Outputfield";
import Button from "../components/Button";

function Tresor() {
  const [messages, setMessages] = useState(null);
  const [tresorTitle, setTresorTitle] = useState(null);
  const { tresorId } = useParams();
  const fetchTresorData = () => {
    tresorService.fetchTresor(tresorId).then((tresorObj) => {
      console.log("setting Tresor title");
      setMessages(tresorObj.messages);
      setTresorTitle(tresorObj.data.title);
      console.log(tresorTitle);
    });
  };
  useEffect(() => {
    fetchTresorData();
  }, [tresorId]);
  const handleRemove = (messageToRemove) => {
    tresorService.removeMessage(tresorId, messageToRemove).then((response) => {
      console.log(response);
      fetchTresorData();
    });
  };
  return (
    <>
      {tresorTitle && <h2>{tresorTitle}:</h2>}
      {messages &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message.messageId}>
              <h3>{message.title}</h3>
              <Outputfield
                type="link"
                label="Link to message"
                value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
                  message.messageId
                }#${message.messagePassword}`}
              />
              {message.editId && (
                <Outputfield
                  type="link"
                  label="Link to message edit"
                  value={`${
                    import.meta.env.VITE_CLIENT_SERVER_URL
                  }/messages/edit/${message.editId}#${message.messagePassword}`}
                />
              )}
              <Button
                onClick={() => {
                  console.log("triggered Button to delete", message.messageId);
                  handleRemove(message.messageId);
                }}
              >
                Remove Message from Tresor
              </Button>
            </div>
          );
        })}
    </>
  );
}

export default Tresor;
