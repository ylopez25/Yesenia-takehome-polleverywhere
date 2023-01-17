import ParticipantForm from "./ParticipantForm";
import { useState } from "react";

export default function Participant({ participant, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
//   const [sum, setSum] = useState(0);



  console.log(participant.firstname, "Participant");
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };


  return (
    <div className="participant">
      {viewEditForm ? (
        <ParticipantForm participantDetails={participant} toggleView={toggleView} handleSubmit={handleSubmit} />
      ) : (
        <div>
          <h1>
            {participant.firstname} <span>{participant.lastname}</span>
          </h1>
          <ul>
            <li key={participant.id}># {participant.id}</li>
            <li key={participant.email}>{participant.email}</li>
            <li key={participant.phone}>{participant.phone}</li>
          </ul>
          <button onClick={() => handleDelete(participant.id)}>delete</button>
          <button onClick={toggleView}>edit participant</button>
        </div>
      )}
    </div>
  );
}
