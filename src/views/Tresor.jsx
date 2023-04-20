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
    console.log(
      "we are in fetch tresor data and will try to fetch tresor",
      tresorId
    );
    tresorService.fetchTresor(tresorId).then((tresorObj) => {
      console.log(" we are in tresor view and we fetched tresor", tresorObj);
      console.log("setting Tresor title");
      setMessages(tresorObj.messages);
      setTresorTitle(tresorObj.title);
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
                <Button
                  onClick={() => {
                    // handleDelete(tresor._id);
                  }}
                  secondary
                  className="col-start-3"
                >
                  edit
                </Button>
                <Button primary className="">
                  <Link
                    to={`/messages/${message.messageId}#${message.messagePassword}`}
                  >
                    open
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Tresor;
