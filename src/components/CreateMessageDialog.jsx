import Dialog from "./Dialog";
import CreateMessage from "../views/CreateMessage";

const CreateMessageDialog = (props) => {
  return (
    <div>
      <Dialog
        id={props.id}
        open={props.open}
        toggle={props.toggle}
        title="write a message"
      >
        <CreateMessage />
      </Dialog>
    </div>
  );
};

export default CreateMessageDialog;
