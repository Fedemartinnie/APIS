import React from 'react';


function VideoComponent() {
  // URL del video de YouTube en formato de inserción (embed)
  const youtubeEmbedUrl = 'https://www.youtube.com/embed/NB3s5w4cy6w';

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        {/* Contenido a la izquierda del video */}
        <h1>Class Name</h1>
        <p>Profesor Name</p>
        <p>Tipo de Clase (individual, grupal)</p>
        <p>Frecuencia (unica, semanal, mensual)</p>
  
      </div>
      <div style={{ flex: 2 }}>
        {/* Video de YouTube incrustado */}
        <iframe
          title="Video de YouTube"
          width="560"
          height="315"
          src={youtubeEmbedUrl} //variable q contiene la url del video de presentacion del profesor
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoComponent;
