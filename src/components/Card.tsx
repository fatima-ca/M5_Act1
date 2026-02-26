import { useState } from "react";
import HeartButton from "./HeartButton";

interface CardProps {
  imagen: string;
  obra: string;
  fecha: string;
  tecnica: string;
}

function Card(props: CardProps) {
  const [contador, setContador] = useState<number>(0);
  
  return ( 
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

        {/* imagen de la pintura */}
        <img src={props.imagen} alt={props.obra} className="mb-4 md:h-3/4 sm:h-3/4 rounded" />
        
        {/* titulo */}
        <h2 className="title-font font-medium text-3xl text-green-700">"{props.obra}"</h2>
      
        {/* fecha */}
        <p className="title-font font-medium text-3xl text-gray-900">{props.fecha}</p>

        {/* tecnica */}
        <p className="leading-relaxed">{props.tecnica}</p>

        {/* boton de like */}
        <HeartButton contador={contador} setContador={setContador} />

      </div>
    </div>
  )
}

export default Card;




