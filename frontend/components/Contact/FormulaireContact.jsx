import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "./InputForm";
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
      toast.success("C'est très bien, tu as été sage !", {
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
        <div>
          <InputForm
            label="Comment t'appelles-tu ?"
            name="name"
            type="text"
            value={formValue.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            As-tu été sage ?
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
            <span>Quels cadeaux aimerais-tu pour Noël</span>
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
            <input type="submit" className="submitButton" value="Submit" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormulaireContact;
