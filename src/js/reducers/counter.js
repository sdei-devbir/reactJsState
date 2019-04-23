const originalState = {todos: [], counter: 0}
export default function counter(state = 0, action) {
    switch (action.type) {
      case 'ADD_COUNTER':
        let newStatePropMaybe = parseInt(state) + 1
        return newStatePropMaybe      
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }