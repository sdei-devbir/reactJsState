// not whole state
// individual prop value?
// yes
export default function todos(state = [], action) {
    switch (action.type) {
        
      case 'ADD_TODO':
      
        let newTodoState = state.concat();
        newTodoState.push('random '+Math.random())
        return newTodoState
        // return state.concat([action.text])
      default:
        return state
    }
  }