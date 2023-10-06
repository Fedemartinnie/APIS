import React, { useEffect, useState } from 'react';

function ListaContratos() {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    // Recupera la lista de contratos almacenados en localStorage
    const storedData = localStorage.getItem('contratos');
    if (storedData) {
      setContratos(JSON.parse(storedData));
    }
  }, []);

  const handleAcceptContract = (index) => {
    // Actualiza el estado del contrato a "Aceptado"
    const updatedContratos = [...contratos];
    updatedContratos[index].estado = "Aceptado";
    setContratos(updatedContratos);
    localStorage.setItem('contratos', JSON.stringify(updatedContratos));
    alert('Contrato ${index + 1} Aceptado.');
  };

  const handleCancelContract = (index) => {
    // Actualiza el estado del contrato a "Cancelado"
    const updatedContratos = [...contratos];
    updatedContratos[index].estado = "Cancelado";
    setContratos(updatedContratos);
    localStorage.setItem('contratos', JSON.stringify(updatedContratos));
    alert('Contrato ${index + 1} Cancelado.');
  };

  const handleFinishContract = (index) => {
    // Actualiza el estado del contrato a "Finalizado"
    const updatedContratos = [...contratos];
    updatedContratos[index].estado = "Finalizado";
    setContratos(updatedContratos);
    localStorage.setItem('contratos', JSON.stringify(updatedContratos));
    alert('Contrato ${index + 1} Finalizado.');
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    fontSize: '16px',
    border: '1px solid #ddd',
  };

  const thTdStyle = {
    padding: '10px',
    textAlign: 'center', // Alinea el contenido horizontalmente al centro
    borderBottom: '1px solid #ddd',
  };

  const thStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // Alinea el contenido horizontalmente al centro
  };

  const oddRowStyle = {
    backgroundColor: '#f2f2f2',
  };

  const hoverRowStyle = {
    backgroundColor: '#ddd',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '8px',
  };

  const acceptedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  };

  const finishedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Datos de Alumnos</h2>
      {contratos.length === 0 ? (
        <p>No hay contratos almacenados.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Teléfono de contacto</th>
              <th style={thStyle}>Email de contacto</th>
              <th style={thStyle}>Horario de contacto</th>
              <th style={thStyle}>Mensaje al profesor</th>
              <th style={thStyle}>Estado</th> {/* Nueva columna para el estado */}
              <th style={thStyle}>Aceptar en la Clase</th> {/* Agrega una columna para la acción */}
              <th style={thStyle}>Cancelar Contrato</th> {/* Nueva columna para la cancelación */}
              <th style={thStyle}>Finalizar Contrato</th> {/* Nueva columna para la finalización */}
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato, index) => (
              <tr key={index} style={index % 2 === 0 ? oddRowStyle : {}}>
                <td style={thTdStyle}>{index + 1}</td>
                <td style={thTdStyle}>{contrato.telefono}</td>
                <td style={thTdStyle}>{contrato.email}</td>
                <td style={thTdStyle}>{contrato.horarioContacto}</td>
                <td style={thTdStyle}>{contrato.mensaje}</td>
                <td style={thTdStyle}>{contrato.estado || "Solicitado"}</td>
                <td style={thTdStyle}>
                  {contrato.estado !== "Aceptado" && (
                    <button style={buttonStyle} onClick={() => handleAcceptContract(index)}>Aceptar</button>
                  )}
                </td>
                <td style={thTdStyle}>
                  {contrato.estado !== "Cancelado" && (
                    <button style={cancelButtonStyle} onClick={() => handleCancelContract(index)}>Cancelar</button>
                  )}
                </td>
                <td style={thTdStyle}>
                  {contrato.estado !== "Finalizado" && (
                    <button style={finishedButtonStyle} onClick={() => handleFinishContract(index)}>Finalizar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaContratos;