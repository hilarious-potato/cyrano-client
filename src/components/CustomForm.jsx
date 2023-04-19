import Button from "./Button";

const CustomForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        props.onSubmit(e);
      }}
      onReset={() => props.onReset()}
    >
      {props.children}
      <div className="button-container container flex justify-end">
        <Button className="mr-2" type="reset" secondary>
          reset
        </Button>
        <Button type="submit" primary>
          submit
        </Button>
      </div>
    </form>
  );
};

export default CustomForm;
