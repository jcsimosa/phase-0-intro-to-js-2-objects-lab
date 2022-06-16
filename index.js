// Write your solution in this file!
const employee = {
    jose : '6304 Kaiwiki Pl',
    juan : '3844 Keanu St',
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}
let allNew = updateEmployeeWithKeyAndValue(employee,'juan','3855 Keanu St');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj['name'] = 'Sam';
    obj['streetAddress'] = '12 Broadway'
    return obj
  }
  const Newcopy = destructivelyUpdateEmployeeWithKeyAndValue(employee,'juan','3855 Keanu Pl');

  function deleteFromEmployeeByKey(employee, key){
    
    const copyTest = {...employee};
    delete copyTest[key]
    return copyTest

  };
  
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
  }
