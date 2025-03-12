import "./formulario.css";

export const Formulario = ({ campos, btnText, funcionForm, funcionInput }) => {
  return (
    <form onSubmit={funcionForm}>
      {campos.map((campo) => (
        <div className="label-input" key={campo.name}>
          <label>{campo.label}</label>
          <input
            type="text"
            placeholder={campo.placeholder}
            name={campo.name}
            onChange={funcionInput}
          />
        </div>
      ))}

      <div className="btn-container">
        <button type="submit">{btnText}</button>
      </div>
    </form>
  );
};
