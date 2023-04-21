import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tresorService from "../services/tresor.service";
import Outputfield from "../components/Outputfield";
import Button from "../components/Button";
import Header from "../components/Header";
import TypedSpinner from "../components/TypedSpinner";
function Tresor() {
  const [messages, setMessages] = useState(null);
  const [tresorTitle, setTresorTitle] = useState(null);
  const { tresorId } = useParams();
  const fetchTresorData = () => {
    tresorService.fetchTresor(tresorId).then((tresorObj) => {
      setMessages(tresorObj.messages);
      setTresorTitle(tresorObj.title);
    });
  };
  useEffect(() => {
    fetchTresorData();
  }, [tresorId]);
  const handleRemove = (messageToRemove) => {
    tresorService.removeMessage(tresorId, messageToRemove).then((response) => {
      fetchTresorData();
    });
  };
  const renderEmptyTresor = () => {
    if (!messages || messages.length === 0) {
      return <TypedSpinner context="emptyTresor" />;
    }
    return <></>;
  };
  return (
    <section className="xxl:w-1/3 relative lg:w-2/3">
      <Header title={"tresor: " + tresorTitle} />

      {renderEmptyTresor()}
      {messages &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div
              className="my-4 grid w-full gap-2 rounded-xl p-4 outline-1 hover:outline  hover:outline-gray-500"
              key={message.messageId}
            >
              <h2 className="text-xl ">{message.title}</h2>
              <div className="grid w-full grid-cols-4 gap-2">
                <Link
                  className="col-start-3"
                  to={`/messages/edit/${message.editId}#${message.messagePassword}`}
                >
                  <Button secondary className="w-full">
                    edit
                  </Button>
                </Link>
                <Link
                  to={`/messages/${message.messageId}#${message.messagePassword}`}
                >
                  <Button primary className="w-full">
                    open
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Tresor;
