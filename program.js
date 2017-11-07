/* Requirements   

V1 Requirements
It should have a place to store todos
It should have a way to display todos
It should have a way to add new todos
It should have a way to change a todosIt should have a way to delete a todos
*/ 
var todos = ['item 1', 'item 2', 'item 3']
console.log('My Todos:',todos)
todos.push('item4')
console.log('My Todos:',todos)
todos.push('item5')
todos[0] = 'item 1 updated'
todos.splice(0, 1)     
