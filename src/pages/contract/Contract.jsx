import React, { useState } from "react";
import "./contract.css";

import { fetchAPI } from "../../utils/fetch";

const Contract = () => {
  const [contract, setContract] = useState({});

  const fetchContract = async e => {
    e.preventDefault();

    const idContract = parseInt(e.target["contractId"].value);

    const contract = await fetchAPI("fetchContract", {
      idContract: isNaN(idContract) ? 0 : idContract,
    });
    const contractData = contract["0"];

    setContract({
      name: contractData["id_contrato"],
      description: contractData["descripcion_del_proceso"],
      dateStart: contractData["fecha_de_inicio_del_contrato"],
      dateEnd: contractData["fecha_de_fin_del_contrato"],
      sector: contractData["descripcion_del_proceso"],
      docs: contract.documents,
    });
  };

  return (
    <section>
      <article>
        {" "}
        <h1>Obtener contrato con documentos</h1>
        <div>
          <form onSubmit={fetchContract}>
            <label htmlFor="contractId">Contrato ID</label>
            <input id="contractId" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
      <article className="details">
        <div className="row">
          <div>
            <h6>Titulo</h6>
            <p>{contract.name}</p>
          </div>
          <div>
            <h6>Descripción</h6>
            <p>{contract.description}</p>
          </div>
        </div>

        <div className="row">
          <div>
            <h6>Fechas</h6>
            <p>
              {contract.dateStart} - {contract.dateEnd}
            </p>
          </div>
          <div>
            <h6>Sector</h6>
            <p>{contract.sector}</p>
          </div>
        </div>
      </article>

      <article>
        <ul>
          {contract.docs?.map((doc, index) => (
            <li key={index}>
              <a href={doc.url} target="_blank" rel="noreferrer">
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Contract;
