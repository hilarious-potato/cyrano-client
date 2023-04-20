import Button from "./Button";
import Header from "./Header";

const Dialog = (props) => {
  return (
    <div
      className={`fixed right-0 top-0 z-20 h-screen w-screen  ${
        props.open ? "block" : "hidden"
      }`}
    >
      <div
        onClick={() => props.toggle()}
        className={`Backdrop absolut right-0 top-0 z-20 h-screen w-screen bg-gray-800/50 backdrop-blur-sm`}
      ></div>
      <dialog
        className="top-16 z-10 w-3/4 rounded-lg border border-gray-300 bg-gray-800/50 p-4 backdrop-blur-sm"
        id={props.id}
        open={props.open ? "open" : false}
      >
        <Header title={props.title}>
          <Button
            onClick={() => {
              props.toggle();
            }}
          >
            close
          </Button>
        </Header>
        {props.children}
      </dialog>
    </div>
  );
};

export default Dialog;
