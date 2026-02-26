import { useState } from "react";

interface WriteOpinionProps {
  onAgregarOpinion: (nombre: string, comentario: string) => void;
}

function WriteOpinion({ onAgregarOpinion }: WriteOpinionProps) {
  const [nombre, setNombre] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim() && comentario.trim()) {
      onAgregarOpinion(nombre, comentario); 
      setNombre("");
      setComentario("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          style={{ margin: "5px", padding: "5px" }}
        />
      </div>
      <div>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Tu comentario"
          style={{ margin: "5px", padding: "5px" }}
        />
      </div>
      <button 
        type="submit" 
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        Agregar opinión
      </button>
    </form>
  );
}

export default WriteOpinion;