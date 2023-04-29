import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ParticipantForm.css'

export default function ParticipantForm(props) {
  let { id } = useParams();
  const { participantDetails } = props;

  const [participant, setParticipant] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    raffle_id: id,
  });

  const handleTextChange = (event) => {
    setParticipant({ ...participant, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (participantDetails) {
      setParticipant(participantDetails);
    }
  }, [id, participantDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(participant, id);
    if (participantDetails) {
      props.toggleView();
    }
    setParticipant({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      raffle_id: id,
    });
  };
  return (
    <div className="RegisterForm" key={id}>
      {/* {props.children} */}
     <h1>Register to Raffle:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input id="firstname" value={participant.firstname} type="text" onChange={handleTextChange} placeholder="First name" required />
        <label htmlFor="lastname">Last Name:</label>
        <input id="lastname" type="text" required value={participant.lastname} onChange={handleTextChange} />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          required
          value={participant.email}
          onChange={handleTextChange}
        />
        <label htmlFor="phone">phone#:</label>
        <input
          id="phone"
          type="text"
          value={participant.phone}
          placeholder="optional"
          onChange={handleTextChange}
        />
        <br />
        <button type='submit'>Join!</button>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
}

