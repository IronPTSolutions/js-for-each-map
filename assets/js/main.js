const numbers = [1, 2, 3, 4, 5];
const names = ['Carlos', 'Julio'];

function print(message) {
  console.log(`INFO: ${message}`);
}

function printEach(elements) {
  for (let element of elements) {
    print(element);
  }
}

function greet(name) {
  console.log(`Hi ${name}!`);
}

/** .forEach: Por cada elemento del array ejecuta una acción */

// Nuestra propia versión de .forEach
function forEach(elements, action) {
  for (let element of elements) {
    action(element); // aquí es como si llamásemos a greet(number)
  }
}

forEach(numbers, greet);

// Es una función que ya está definida en la colección de arrays.
// No necesitamos pasarle el array como primer argumento, este método pertenece al array
// que queremos recorrer.
numbers.forEach(greet);

const action = function (name) {
  console.log(`Hi ${name}!`);
}

forEach(numbers, action);

numbers.forEach(function (number) {
  console.log(`Hi with anon ES5: ${number}!`);
});

numbers.forEach((number) => {
  console.log(`Hi with arrow ES6: ${number}!`);
});


/** .map */

const users = [
  {
    name: 'Carlos',
    lastName: 'del Prado',
    age: 30
  },
  {
    name: 'Pepe',
    lastName: 'MArtín',
    age: 32
  }
]

function getNames(users) {
  const names = [];

  let user;
  for (let i = 0; i < users.length; i++) {
    user = users[i];
    names.push(user.name);
  }

  return names;
}

function getName(user) {
  return user.name;
}

function forEachTransform(elements, action) {
  const transformations = [];

  for (const element of elements) {
    const transformation = action(element);
    transformations.push(transformation);
  }

  return transformations;
}

console.log(getNames(users));
const userNames = forEachTransform(users, getName);
console.log(userNames);

console.log(users.map(getName));

const userNamesWithMap = users.map((user) => {
  return user.name;
})
console.log('userNamesWithMap:', userNamesWithMap);

function sum2(numbers) {
  const result = numbers.map((number) => {
    return number + 2
  });
  return result;
}
console.log('Sum 2:', sum2(numbers));
console.log('Numbers :', numbers);

function addEmails(users) {
  const usersWithEmails = users.map((user) => {
    const email = `${user.name}.${user.lastName}@example.org`
      .toLowerCase()
      .replace(' ', '');

    return {
      name: user.name,
      lastName: user.lastName,
      email: email,
      age: user.age
    };
  });
  return usersWithEmails;
}

function addEmails(users) {
  const usersWithEmails = users.map((user) => {
    user.email = `${user.name}.${user.lastName}@example.org`
      .toLowerCase()
      .replace(' ', '');

    return user;
  });
  return usersWithEmails;
}

console.log('users with emails', addEmails(users));
console.log('users:', users);


/** TUTORIAL MAP */

function map(users, transformationFunction) {
  const result = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const transformation = transformationFunction(user);
    result.push(transformation);
  }

  return result;
}
// const numbers = [1, 2, 3, 4, 5, 6] => map(numbers, (number) => { return number + 2;})
// result = []
// i: 0 => number[i]: 1  transformationFunction(1) (1) => { return 1 + 2;} => [3]
// i: 1 => number[i]: 2  transformationFunction(2) (2) => { return 2 + 2;} => [3, 4]
// i: 2 => number[i]: 3  transformationFunction(3) (3) => { return 3 + 2;} => [3, 4, 5]

// const users = [{ name: 'Carlos'}, { name: 'Julio'}] => map(users, (user) => { return user;})
// result = []
// i: 0 => users[i]: { name: 'Carlos' }  transformationFunction({ name: 'Carlos' }) ({ name: 'Carlos' }) => { return { name: 'Carlos' }} => [{ name: 'Carlos' }]
// i: 1 => users[i]: { name: 'Julio' }  transformationFunction({ name: 'Julio' }) ({ name: 'Julio' }) => { return { name: 'Julio' }} => [{ name: 'Carlos' }, { name: 'Julio' }]

users.map((user) => {
  user.email = '@example.org';
  return user;
})

// const users = [{ name: 'Carlos', email: '@example.org'}, { name: 'Julio'}] => map(users, (user) => { return user.email = '@example'; return user;})
// result = []
// i: 0 => users[i]: { name: 'Carlos' }  transformationFunction({ name: 'Carlos' }) ({ name: 'Carlos' }) => { return { name: 'Carlos', email: '@example.org' }} => [{ name: 'Carlos', email: '@example.org' }]



users.map((user) => {
  return {
    name: user.name,
    email: '@example.org'
  };
})

// const users = [{ name: 'Carlos'}, { name: 'Julio'}] => map(users, (user) => { return user.email = '@example'; return user;})
// result = []
// i: 0 => users[i]: { name: 'Carlos' }  transformationFunction({ name: 'Carlos' }) ({ name: 'Carlos' }) => { return { name: 'Carlos', email: '@exanple.org' }} => [{ name: 'Carlos', email: '@exanple.org' }]


console.log(movies);
