export const ADD_TO_LIST = (user) => {
    return {type:"ADD_TO_LIST", payload:user}
}
// export const DELETE_FROM_LIST = (newuser) => {
//     return {type:"DELETE_FROM_LIST", payload:newuser}
// }
export const DELETE_FROM_LIST = (id) => {
    return {type:"DELETE_FROM_LIST", payload:id}
}