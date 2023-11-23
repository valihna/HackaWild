function InputForm({ label, onChange, type, value, name }) {
  return (
    <label>
      <span className="labelContactForm">{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} />
    </label>
  );
}

export default InputForm;
