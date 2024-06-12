import React from 'react'

const ShoeCard = ({imageURL,changeBigShoe,bigShowImg}) => {
 
  const handleClick=()=>{
    if(bigShowImg!==imageURL.bigShoe){
        changeBigShoe(imageURL.bigShoe);
    }
  }

  return (
    <div className={`bg-card rounded-full border-2 ${bigShowImg===imageURL.bigShoe?'border-coral-red':'border-transparent'}`} 
    onClick={handleClick}>
        <img src={imageURL.thumbnail} className="w-24 h-24 object-contain"/>
    </div>
  )
}

export default ShoeCard