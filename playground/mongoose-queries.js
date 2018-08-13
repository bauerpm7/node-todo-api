const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// const id = '5b71846c03c8ce12dceb1bcb1';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('todo by id', todo);
// }).catch((e) => console.log(e));

const id = '5b7189421437f03e9a5bf1ae';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('user by id', user);
}).catch((e) => console.log(e));

