
interface OpinionCardProps {
  nombre: string;
  comentario: string;
}

function OpinionCard(props: OpinionCardProps) {
  
  return ( 
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        
        {/* nombre de usuario */}
        <p className="font-medium  text-pink-900">Usuario</p>
        <p className="font-medium  text-pink-900">{props.nombre}</p>
      
        {/* comentario */}
        <p className="font-medium  text-gray-900">Comentario</p>
        <p className="font-medium text-gray-900">{props.comentario}</p>    

      </div>
    </div>
  )
}

export default OpinionCard;




