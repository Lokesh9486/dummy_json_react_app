import React from 'react';

const  CreditsData=[
    [
        'Get Best Prices.png',
        'Get Best Prices',
        'Pay through our application and save thousands and get amazing rewards'
    ],
    [
        'Covid Safe.png',
        'Covid Safe',
        'Pay through our application and save thousands and get amazing rewards'
    ],
    [
        'Flexible Payment.png',
        'Flexible Payment',
        'Pay through our application and save thousands and get amazing rewards'
    ],
    [
        'Find The Best Near You.png',
        'Find The Best Near You',
        'Pay through our application and save thousands and get amazing rewards'
    ],
]


const data=CreditsData.map((item,index)=>{
    return(
    <div className='cards' key={index}>
    <img src={require(`../image/${item[0]}`)} alt='one'/>
    <h5>{item[1]}</h5>
    <p>{item[2]}</p>
    </div>
    )
})



const CreditsCard=()=>{
    return( 
           <div className='row credits'>
            {data}
         </div>
    )
}

export default CreditsCard;