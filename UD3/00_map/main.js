let users = [
    {id: 0, name: 'John'},
    {id: 1, name: 'Paul'}
]

let ids = users.map(user => user.id)
console.log(ids);

let names = users.map(user => user.name)
console.log(names);

// let usersAdvanced = users.map(user => {
users = users.map(user => {  
    return {
        id: user.id,
        name: user.name,
        surname: 'generico',
        age: Math.floor(Math.random() * 32)
    }
}).filter(user => user.id > 0)

console.log(users);
