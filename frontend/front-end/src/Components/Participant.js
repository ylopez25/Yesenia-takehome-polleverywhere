import ParticipantForm from "./ParticipantForm";
import { useState } from "react";

export default function Participant({ participant, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="participant" key={participant.id}>
      {viewEditForm ? (
        <ParticipantForm participantDetails={participant} toggleView={toggleView} handleSubmit={handleSubmit} />
      ) : (
        <div>
          <h1>
            {participant.firstname} <span>{participant.lastname}</span>
          </h1>
          <ul>
            <li>Id#: {participant.id}</li>
            <li>Email: {participant.email}</li>
            <li>Phone: {participant.phone}</li>
          </ul>
          {/* <button onClick={() => handleDelete(participant.id)}>delete</button>
          <button onClick={toggleView}>edit participant</button> */}
        </div>
      )}
    </div>
  );
}
