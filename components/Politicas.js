import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

const Politicas = () => {
  const router = useRouter();

  return (
    <div className="container d-flex  me-5 mt-5 flex-column">
      <h1>POLITICAS</h1>
      <BiArrowBack
        fontSize={80}
        className="mt-5 mb-5 d-flex align-self-center"
        color="black"
        onClick={() => router.back()}
      />
      <p className="align-self-center">Regrese al formulario</p>
    </div>
  );
};

export { Politicas };
