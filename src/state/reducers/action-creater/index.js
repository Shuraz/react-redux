export const depositMoney =(amount)=>{
        return (dispach)=>{
            dispach({
                type:"deposit",
                payload:amount
            })
        }
}

export const withdrawMoney=(amount)=>{
        return(dispach)=>{
            dispach({
                type:"withdraw",
                payload:amount
            })
        }
}