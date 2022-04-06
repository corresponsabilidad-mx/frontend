const Form = () => {
  return (
    <>
      <div className="form-container">
        <form
          action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSexDJTuu9HsuM3bAtaF72BUJTKiIAsJxFG6x_UiHdO5smL4Gw/formResponse"
          method="post"
          className="d-flex flex-column align-items-center"
        >
          <input
            type="text"
            name="entry.1019727939"
            placeholder="Nombre y Apellido"
            className="input-form"
          ></input>
          <input
            type="text"
            name="entry.54816082"
            placeholder="E-mail"
            className="input-form"
          ></input>
          {/* <div className="d-flex flex-row align-items-start">
            <label className="me-2">
              Deseo recibir información de la institución:
            </label>
            <span className="d-flex align-top">
              <input
                type="radio"
                name="entry.724166614"
                className="checkbox-form me-2"
              ></input>
              <label className="fw-bold">SI</label>
            </span>
          </div> */}
          <button type="submit" className="btn-form">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
