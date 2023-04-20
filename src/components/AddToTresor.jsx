import { useEffect, useState } from "react";
import CustomForm from "./CustomForm";
import Spinner from "./Spinner";
import tresorService from "../services/tresor.service";
import Inputfield from "./Inputfield";

function AddToTresor(props) {
  console.log("open add to tresor");
  const messageObj = props.messageObj;
  const [uploadTresor, setUploadTresor] = useState("");
  const [userTresorList, setUserTresorList] = useState(null);
  const [messageTitle, setMessageTitle] = useState("");
  useEffect(() => {
    console.log("now tryin to fetch tresor list");
    tresorService.fetchUserList().then((response) => {
      console.log("fetching Tresors in add tresor gave:", response);
      setUserTresorList(response);
      console.log("we set Tresor list and not its: ", userTresorList);
    });
  }, [messageObj]);
  const pushMessageToTresor = (e) => {
    e.preventDefault();
    const data = { ...messageObj, title: messageTitle };
    console.log(data, "upload Tresor Id", uploadTresor);
    tresorService
      .pushItem(uploadTresor, data)
      .then((response) => console.log(response));
  };
  return (
    <>
      {!userTresorList && <Spinner context="decrypt" />}
      {userTresorList && (
        <CustomForm onSubmit={pushMessageToTresor}>
          <h2>Please give a nickname to the message and choose a Tresor</h2>
          <Inputfield
            required
            allowCopy={false}
            className="my-4"
            label="message name"
            name="messageTitle"
            placeholder={messageTitle}
            value={messageTitle}
            onChange={(e) => {
              setMessageTitle(e.target.value);
            }}
          />
          <label htmlFor="tresorSelect"></label>
          <select
            required
            name="tresorSelect"
            id="tresorSelect"
            value={uploadTresor}
            onChange={(e) => {
              setUploadTresor(e.target.value);
            }}
          >
            {userTresorList.map((tresor) => {
              return (
                <option key={tresor._id} value={tresor._id}>
                  {tresor.title}
                </option>
              );
            })}
          </select>
        </CustomForm>
      )}
    </>
  );
}

export default AddToTresor;
