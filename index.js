//============ No modificar ==============
const userObj = {
    name: "Diego",
    lastName: "Hernandez",
    email: "diego30@gmail.com",
}
//========================================

//============ Actividad ===============
//Completa las siguientes funciones
const getName = () => {
    //1. Regresa como resultado el nombre del usuario
    return userObj.name;
    
}

const getLastName = () => {
    //2. Regresa como resultado el apellido del usuario
    return userObj.lastName;
}

const replaceEmail = (newEmail) => {
    //3. Remplaza el valor de la propiedad email de userObj y regresa como resultado todo el objeto
    userObj.email = newEmail;
    return userObj;
}

const getKeys = () => {
    //4. Regresa como resultado un arreglo de todas las propiedades que tiene el objeto userObj
    return Object.keys(userObj);
}

const getValues = () => {
    //5. Regresa como resultado un arreglo con todos los valores del objeto userObj
    return Object.values(userObj);
}

const addKeyValue = (key, value) => {
    //6. Agrega una llave y un valor al objeto userObj, respecto a los parametros key y value
    userObj[key] = value;
    return userObj;
}

//===== No modificar ====
module.exports = {
    getName, 
    getLastName,
    replaceEmail,
    getKeys,
    getValues,
    addKeyValue
}