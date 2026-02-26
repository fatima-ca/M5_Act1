import Card from "./Card";
import { useData } from "../utils/useData";

function CardSet() { 
    const {data} = useData();

    return ( 
        <div className="container mx-auto px-5 py-10">

            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Galería de Monet</h1>
            </div>

            <div className="flex flex-row gap-4 justify-center">
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