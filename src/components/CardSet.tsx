import Card from "./Card";
import { useData } from "../utils/useData";

function CardSet() { 
    const {data} = useData();

    return ( 
        <div className="container mx-auto px-5 py-10 inset-shadow-sm inset-shadow-black-800">

            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Galería de Monet</h1>
            </div>
            
            <div className="columns-2 gap-8">
                {data.map((item, index) => (
                    <Card 
                    key={index}
                    imagen={item.imagen}
                    obra={item.obra} 
                    fecha={item.fecha} 
                    tecnica={item.tecnica} 
                    />
                ))}
            </div>
            
        </div>
    )
}

export default CardSet;