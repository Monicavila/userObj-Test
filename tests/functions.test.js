const {getName, getLastName, addKeyValue, getKeys, getValues, replaceEmail} = require('../index');

test('Obtener el nombre del usuario', () => {
    expect(getName()).toBe('Diego');
});

test('Obtener el apellido del usuario', () => {
    expect(getLastName()).toBe('Hernandez');
});

test('Remplazando el email del usuario por diego28@gmail.com', () => {
    expect(replaceEmail('diego28@gmail.com')).toMatchObject({
        name: "Diego",
        lastName: "Hernandez",
        email: "diego28@gmail.com",
    })
});

test('Obteniendo todas las propiedades del objeto', () => {
    expect(getKeys()).toEqual(expect.arrayContaining(['email', 'lastName', 'name']));
})

test('Obteniendo todos los valores de un objeto', () => {
    expect(getValues()).toEqual(expect.arrayContaining(['Diego', 'Hernandez', 'diego28@gmail.com']));
})

test('Obteniendo el objeto modificado', () => {
    expect(addKeyValue('age', 28)).toMatchObject({
        name: "Diego",
        lastName: "Hernandez",
        email: "diego28@gmail.com",
        age: 28
    });
})