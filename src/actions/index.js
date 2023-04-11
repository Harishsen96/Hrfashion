export const Add =(items)=>{
    return {
        type :"ADD_Card",
        payload : items
}
}

export const Remove =(id)=>{
    return {
        type :"Remove_Card",
        payload : id
}
}

export const RemoveOne =(items)=>{
    return {
        type :"Remove_item",
        payload : items
}
}