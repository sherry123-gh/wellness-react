function Content2(){
    
    return(
        <div>
            {
                cont1.map(()=>{
                    return <Content2element text={item.text}/>
                })
            }
        </div>
    )
}