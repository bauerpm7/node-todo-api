const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5b71b5490bc2a998d89cf8bc').then((todo) => {
  console.log(todo);
});

