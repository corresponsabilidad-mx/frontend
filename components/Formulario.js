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
          <button type="submit" className="btn-form">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
