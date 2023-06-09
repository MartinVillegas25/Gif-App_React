 export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rDv3OIhEyK5Vjb31gvrRXllvLzN63iB6&q=${category}&limit=12`;
    
    const resp = await fetch(url)

    const {data} = await resp.json();

    const gifs = await data.map( img =>({
        
        
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        
    }));
    

   return gifs;

}
