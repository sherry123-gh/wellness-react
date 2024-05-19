import Contentelement from "./Contentelement";

function Content(){
    let cont =["-Diet and Nutrition Tips","-Skin Health Tips", "-Weight Loss and Gain Tips","-Hydration Tips","-Younger Looks",
    "-Hair Growth Tips","-Suplements for energy.*among others"
    ]

    
    return(
        <div>
            {
                cont.map((item)=>{
                    return <Contentelement text={item.text}/>
                })
            }    
        </div>
    )
}



export default Content;