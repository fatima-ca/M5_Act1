// components/OpinionCardSet.tsx
import { useState, useEffect } from "react";
import OpinionCard from "./OpinionCard";
import WriteOpinion from "./WriteOpinion";

interface Opinion {
  id: number;
  nombre: string;
  comentario: string;
}

function OpinionCardSet() {
  const [opiniones, setOpiniones] = useState<Opinion[]>([]);

  useEffect(() => {
    console.log("🔄 Cargando opiniones guardadas...");
    const opinionesGuardadas = localStorage.getItem('opiniones');
    
    if (opinionesGuardadas) {
      try {
        const opinionesParseadas = JSON.parse(opinionesGuardadas);
        setOpiniones(opinionesParseadas);
        console.log("✅ Opiniones cargadas:", opinionesParseadas.length);
      } catch (error) {
        console.error("Error al cargar opiniones:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (opiniones.length > 0) {
      console.log("✨ Guardando opiniones...");
      
    
      
      localStorage.setItem('opiniones', JSON.stringify(opiniones));
      
      const ultima = opiniones[opiniones.length - 1];
      console.log(`📝 Nueva opinión de ${ultima.nombre}: "${ultima.comentario}"`);
    }
  }, [opiniones]);

  const agregarOpinion = (nombre: string, comentario: string) => {
    const nuevaOpinion: Opinion = {
      id: Date.now(),
      nombre: nombre.trim(),
      comentario: comentario.trim()
    };

    setOpiniones([...opiniones, nuevaOpinion]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Opiniones de la obra de Monet</h2>
      
      

      <WriteOpinion onAgregarOpinion={agregarOpinion} />

      <div className="flex flex-wrap -m-4 mt-4">
        {opiniones.map((opinion) => (
          <OpinionCard
            key={opinion.id}
            nombre={opinion.nombre}
            comentario={opinion.comentario}
          />
        ))}
      </div>

      {opiniones.length === 0 && (
        <div className="text-center mt-8 p-8 bg-gray-50 rounded-lg">
          <p className="text-red-500 text-lg">
            Sin opniones
          </p>
        </div>
      )}
    </div>
  );
}

export default OpinionCardSet;