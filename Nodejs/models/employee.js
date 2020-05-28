const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Employee }; 



// const getName = () => {
//     return 'Jim';
//   };
  
//   exports.getName = getName;