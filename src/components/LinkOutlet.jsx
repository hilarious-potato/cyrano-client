import Outputfield from "../components/Outputfield";
import Button from "../components/Button";

const LinkOutlet = (props) => {
  return (
    <div>
      <div className="my-6 rounded-lg border border-secondary p-4">
        <h3 className="mb-2 text-lg italic">{props.title}</h3>
        <p>{props.subTitle}</p>
      </div>
      <Outputfield
        type="link"
        label="private link"
        caption="don’t forget to send the password separately!"
        value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
          props.postedMessage.messageId
        }`}
      />
      <Outputfield
        type="link"
        label="public link"
        caption="the password is already provided"
        value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/${
          props.postedMessage.messageId
        }#${props.postedMessage.messagePassword}`}
      />
      <Outputfield
        type="link"
        label="link to edit"
        caption="with this link anyone can edit this message"
        value={`${import.meta.env.VITE_CLIENT_SERVER_URL}/messages/edit/${
          props.postedMessage.editId
        }#${props.postedMessage.messagePassword}`}
      />
      <Outputfield
        type="password"
        label="password"
        caption="take care of it. if it’s gone – it’s gone!"
        value={
          props.postedMessage.messagePassword.length > 0
            ? props.postedMessage.messagePassword.length
            : "you haven’t provided a password"
        }
      />
      <div className="grid justify-end">
        <Button
          onClick={() => {
            props.newMessage();
          }}
          primary
        >
          new message
        </Button>
      </div>
    </div>
  );
};

export default LinkOutlet;
