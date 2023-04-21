import { useEffect, useState } from "react";
import CustomForm from "./CustomForm";
import Spinner from "./Spinner";
import tresorService from "../services/tresor.service";
import Inputfield from "./Inputfield";
import Header from "./Header";

function AddToTresor(props) {
  const messageObj = props.messageObj;
  const [uploadTresor, setUploadTresor] = useState("");
  const [userTresorList, setUserTresorList] = useState(null);
  const [messageTitle, setMessageTitle] = useState("");
  useEffect(() => {
    if (userTresorList && userTresorList.length > 0) {
      setUploadTresor(userTresorList[0]._id);
    }
  }, [userTresorList]);
  useEffect(() => {
    tresorService.fetchUserList().then((response) => {
      setUserTresorList(response);
    });
  }, [messageObj]);
  const pushMessageToTresor = (e) => {
    e.preventDefault();
    if (!uploadTresor) {
      console.log("no tresor selected");
      return;
    }
    const data = { ...messageObj, title: messageTitle };
    tresorService
      .pushItem(uploadTresor, data)
      .then((response) => console.log(response));
    props.toggleDialogue();
  };
  return (
    <>
      {!userTresorList && <Spinner />}
      {userTresorList && userTresorList.length > 0 && (
        <CustomForm onSubmit={pushMessageToTresor}>
          <Header title="add message to tresor" />
          <p className=" mb-4 text-gray-400">
            Please give a nickname to the message and choose a Tresor
          </p>
          <Inputfield
            required
            allowCopy={false}
            className="mb-2"
            label="message name"
            name="messageTitle"
            placeholder={messageTitle}
            value={messageTitle}
            onChange={(e) => {
              setMessageTitle(e.target.value);
            }}
          />
          <div className="relative mb-4 grid gap-x-4 gap-y-0 font-body md:grid-cols-8">
            <label
              htmlFor="tresorSelect"
              className="flex flex-col justify-center  text-gray-400 md:col-span-2 md:text-right"
            >
              select tresor
            </label>
            <select
              className="overflow-hidden rounded-md border border-gray-600 bg-gray-800/25 px-3 py-1 text-gray-200 backdrop-blur-sm focus:ring-primary md:col-span-6"
              required
              name="tresorSelect"
              id="tresorSelect"
              value={uploadTresor}
              onLoad={(e) => {
                setUploadTresor(e.target.value);
              }}
              onChange={(e) => {
                setUploadTresor(e.target.value);
              }}
            >
              {userTresorList &&
                userTresorList.map((tresor) => {
                  return (
                    <option key={tresor._id} value={tresor._id}>
                      {tresor.title}
                    </option>
                  );
                })}
            </select>
          </div>
        </CustomForm>
      )}
    </>
  );
}

export default AddToTresor;
