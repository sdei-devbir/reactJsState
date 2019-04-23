export const addArticle = (payload) => {

    
    return { type: 'ADD_ARTICLE', payload };
}

export const addTodo = (payload) => {

    
    return { type: 'ADD_TODO' };
}

export const addCounter = (payload) => {

    
    return { type: 'ADD_COUNTER' };
}

export const getData = () => {

    console.log('action API call')
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
} 

// export const getData = (payload) => {

    
//     return { type: 'ADD_ARTICLE', payload };
// }
