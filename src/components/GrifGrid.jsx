import {PropTypes } from 'prop-types'
import { GrifItem } from "./GrifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GrifGrid = ( {category}) => {
    

//vamos a crear un custom hook para reemplazar toto el codigo abajo

const { images , isLoading } = useFetchGifs(category) // le podemos poner cualquier nombre, solo hay q poner  use delante del nombre, norma al crear hooks

  // const [images, setImages] = useState([]);

  // const getImages = async ()=>{
  //   const newImages = await getGif(category);
  //   setImages(newImages);
    
  // }

  // //el useEffect es un hook que sirva para disparar un efecto secundario, q es un algo que you quiero dispadar cuando algo sucesa

  // useEffect(() => {
  //   getImages();
    
  // }, []) 
  
  //con las llaves vacias, le digo q solo lo renderice la primera vez
  

  
    return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h2>Loading...</h2>)
        }

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

GrifGrid.propTypes = {
  category : PropTypes.string.isRequired

}
