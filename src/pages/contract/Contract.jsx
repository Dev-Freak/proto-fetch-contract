import React, { useState } from "react";
import "./contract.css";

import { fetchAPI } from "../../utils/fetch";

const Contract = () => {
  const [contract, setContract] = useState({});

  const fetchContract = async e => {
    e.preventDefault();

    const idContract = parseInt(e.target["contractId"].value);

    const res = await fetchAPI("fetchContract", { idContract: isNaN(idContract) ? 0 : idContract });

    setContract({
      name: res["0"]["id_contrato"],
      description: res["0"]["descripcion_del_proceso"],
      dateStart: res["0"]["fecha_de_inicio_del_contrato"],
      dateEnd: res["0"]["fecha_de_fin_del_contrato"],
      sector: res["0"]["descripcion_del_proceso"],
      docs: res.documents,
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
