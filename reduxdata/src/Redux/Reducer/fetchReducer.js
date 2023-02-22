const initialState={
    fetchdata:[]
}
export const fetchdataapi=(state=initialState,action)=>{
  switch(action.type){
    case "FETCH_DATA": return{
        ...state,
        fetchdata:action.payload,
    } 
    default : return state
  }
}