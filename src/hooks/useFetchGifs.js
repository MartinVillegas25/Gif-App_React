
// custom hooks, hooks creados para realizar una opcion asi lo podemos usar en cualquier lado donde sea necesario.

import { useEffect, useState } from "react";
import { getGif } from "../helpers/getgif";

//un hook no es mas que una funcion

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async ()=>{
      const newImages = await getGif(category);
      setImages(newImages);
      setIsLoading(false);
      
    }
  
    useEffect(() => {
      getImages();
      
    }, []) 

    return{
        images,
        isLoading,
    }


}
