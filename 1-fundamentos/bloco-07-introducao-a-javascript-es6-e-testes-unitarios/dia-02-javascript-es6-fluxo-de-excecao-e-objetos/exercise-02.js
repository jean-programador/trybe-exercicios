const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  const person = Object.values(order.order.delivery);
  const infos = Object.values(order);
  return `Olá ${person[0]}, entrega para: ${[infos[0]]}, Telefone: ${[
    infos[1],
  ]}, ${infos[2].street}, Nº: ${infos[2].number}, AP: ${infos[2].apartment}`;
};

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const person = Object.values(order);
  const flavors = Object.keys(person[3].pizza);
  const drinks = Object.values(person[3].drinks);
  return `Olá ${person[0]}, o total do seu pedido de ${flavors[0]}, ${flavors[1]} e ${drinks[0].type} é R$ ${person[4].total},00.`;
};

console.log(orderModifier(order));
