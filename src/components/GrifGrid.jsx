import { useEffect, useState } from "react"
import { getGif } from "../helpers/getgif"
import { GrifItem } from "./GrifItem";




export const GrifGrid = ( {category}) => {
    

  const [images, setImages] = useState([]);

  const getImages = async ()=>{
    const newImages = await getGif(category);
    setImages(newImages);
    
  }

  //el useEffect es un hook que sirva para disparar un efecto secundario, q es un algo que you quiero dispadar cuando algo sucesa

  useEffect(() => {
    getImages();
    
  }, []) //con las llaves vacias, le digo q solo lo renderice la primera vez
  

  
    return (
    <>
        <h3>{category}</h3>

        <div className="card-grid">
          {
            images.map( (img) => (
              <GrifItem 
              key={img.id}
              {...img} // para que el gifitem reciba cada una de las propediades como items
              />
            ))

          }
        </div>
        
    
    </>
  )
}
