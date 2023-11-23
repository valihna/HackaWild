/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactForm.css";

function FormulaireContact() {
  const [formValue, setFormValue] = useState({
    name: "",
    question: "",
    message: "",
  });

  const [question, setQuestion] = useState();

  const handleChangement = (e) => {
    setQuestion(e.target.value);
  };

  const toastQuestion = () => {
    if (question === "oui") {
      toast.success("Tu as été sage, tu seras gâté pour Noël !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Tu n'as pas été sage, le Père Noël s'en souviendra !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toastQuestion();
  };

  return (
    <div className="contactCard">
      <h1>Messagerie du Père Noël</h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="firstQuestion">
          <label>
            Comment t'appelles-tu ? <br />
            <input
              type="text"
              name="name"
              value={formValue.lastname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="secondQuestion">
          <label>
            As-tu été sage ? <br />
            <input
              type="radio"
              name="question"
              value="oui"
              checked={question === "oui"}
              onChange={handleChangement}
            />
            Oui
          </label>
          <label>
            <input
              type="radio"
              name="question"
              value="non"
              checked={question === "non"}
              onChange={handleChangement}
            />
            Non
          </label>
        </div>
        <div className="messageForm">
          <label>
            <span>
              Quels cadeaux aimerais-tu pour Noël ?<br />
            </span>
            <textarea
              className="textArea"
              name="message"
              value={formValue.message}
              onChange={handleChange}
              id="description"
              maxLength={400}
              required
            />
          </label>
          <div className="submit">
            <input type="submit" className="submitButton" value="Envoyer" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormulaireContact;
