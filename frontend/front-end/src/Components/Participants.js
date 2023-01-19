import Participant from "./Participant";
import ParticipantForm from "./ParticipantForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Participants() {
  const [participants, setParticipants] = useState([]);
  const [writing, setWriting] = useState('');
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/raffles/${id}/participants`)
      .then(
        (response) => {
          setParticipants(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, [id]);


  const search = (e) => {
    setWriting(e.target.value)
  }

  const filteredData = (writing) => {
    let text = writing.toLowerCase();
    console.log(participants.firstname.toLowerCase())
    return participants.filter(el => el.firstname.toLowerCase().includes(text))
  }

  /*POST*/
  const handleAdd = (newParticipant) => {
    axios
      .post(`${API}/raffles/${id}/participants`, newParticipant)
      .then(
        (response) => {
          setParticipants([response.data, ...participants]);
        },
        (error) => console.error(error)
      ).catch((c) => console.warn("catch", c));
  };

  /*Edit*/
  const handleEdit = (updatedParticipant) => {
    axios
      .put(`${API}/raffles/${id}/participants/${updatedParticipant.id}`, updatedParticipant)
      .then((response) => {
        const copyPtArray = [...participants];
        const indexUpdatedPt = copyPtArray.findIndex((participant) => {
          return participant.id === updatedParticipant.id;
        });
        copyPtArray[indexUpdatedPt] = response.data;
        setParticipants(copyPtArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  /*DELETE*/
  const handleDelete = (id) => {
    axios
      .delete(`${API}/raffles/${id}/participants/${id}`)
      .then(
        (response) => {
          const copyPtsArray = [...participants];
          const indexDeletedPts = copyPtsArray.findIndex((participant) => {
            return participant.id === id;
          });
          copyPtsArray.splice(indexDeletedPts, 1);
          setParticipants(copyPtsArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section className="Participants">
      <ParticipantForm handleSubmit={handleAdd} />
      {participants.length > 1 ? (  <h1>Total Participants: {participants.length}</h1>) : (  <h1>Total Participant: {participants.length}</h1>)}
      <label>Search</label>
      <input type="text" value={writing} onChange={search} placeholder="Search by first name"/>
      {filteredData(writing).map((participant) => (
        <Participant key={participant.id} participant={participant} handleSubmit={handleEdit} handleDelete={handleDelete} />
      ))}
    </section>
  );
}