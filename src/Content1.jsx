import Contentelement from "./Contentelement"

function Content1(){
    let cont1 = ["-Stay Hydrated","-Moisturize daily","-Get Enough Sleep For Skin Regeneration.",
    "-Additionally , Manage Stress level as stress can impact skin health negatively.",
    "-Regular Exercise also promotes healthy circulation, which benefits your skin."
]
    return(
        <div>
            {
                cont1.map(()=>{
                    return <Contentelement text={item.text}/>
                })
            }
        </div>
    )
}

export default Content1