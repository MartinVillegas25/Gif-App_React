
import PropTypes from 'prop-types';





export const GrifItem = ( {title , url}) => {


  const copyLink = ()=>{

    window.addEventListener('click', (e)=>{
      
      const link = e.target.parentNode.firstChild.src;    
      navigator.clipboard.writeText(link);

      

    })
  }

  
  return (
    <>
      <div className="card">
          <img src={url} alt={title} />
        
        
            <span onClick={copyLink}>Copy</span>
      </div>
          
    </>
  )
}


GrifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}

