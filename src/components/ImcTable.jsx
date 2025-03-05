import React from 'react'
import Button from './Button'

import "./imcTable.css"

const ImcTable = ({ data, imc, info, infoClass, action }) => {
  return (
    <div id="result-container">
      <p id="imc-number">Seu Imc: <span className={infoClass}>{imc}</span>  </p>
      <p id="imc-info">Situação atual: {info} </p>
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>Imc</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}

        <Button id="back-btn" text="voltar" action={action}/>
      </div>
    </div>
  )
}

export default ImcTable
