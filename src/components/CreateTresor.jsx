import { useState } from "react";
import tresorService from "../services/tresor.service";
import CustomForm from "./CustomForm";
import Inputfield from "./Inputfield";

function CreateTresor(props) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const callTresorCreation = async () => {
      const newTresor = await tresorService.create(title);
      console.log(newTresor);
      props.fetchTresors();
      setTitle("");
    };
    callTresorCreation();
  };
  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <Inputfield
          required
          allowCopy={false}
          className="my-4"
          label="title"
          name="title"
          placeholder={title}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </CustomForm>
    </>
  );
}

export default CreateTresor;
