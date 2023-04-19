import CustomForm from "../components/CustomForm";
import Inputfield from "../components/Inputfield";
import Dialog from "../components/Dialog";

const PWDialog = (props) => {
  return (
    <Dialog
      id="pw-dialog"
      open={props.open}
      toggle={props.toggle}
      title={props.title}
    >
      <CustomForm
        onReset={() => props.onReset("")}
        onSubmit={(e) => props.onSubmit(e)}
      >
        <Inputfield
          className="my-4"
          label="password"
          name="password"
          placeholder="enter password"
          value={props.password}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </CustomForm>
    </Dialog>
  );
};
export default PWDialog;
