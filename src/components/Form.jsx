import Button from "./Button";

const Form = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      {props.children}
      <div className="button-container absolute right-0">
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

export default Form;
