//Parte 1
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
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  const address = Object.values(order.address);
  const customerInfo = (order) => {
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${address}`)
  }
  
  
  customerInfo(order);

  const orderModifier = (order) => {
    const pizzas = Object.keys(order.order.pizza);
    const drink = Object.keys(order.order.drinks)
    order.name = "Luiz Silva"
    order.payment = "R$50"
    console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas} e ${drink} é ${order.payment}`)
  
  }
  
  orderModifier(order);


//-------------------------------------------------------------------------------------------------------------------------------------------------


//Parte 2
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
    //1
    const addLesson = (objeto, chave, valor) => {objeto[chave] = valor};
    addLesson(lesson2, 'turno', 'manhã');
    console.log(lesson2);
    //2
    const objectKeys = object => {console.log(Object.keys(object))};
    objectKeys(lesson3);
    //3
    const objectLength = object => {console.log(Object.keys(object).length)}
    objectLength(lesson2);
    //4
    const objectValues = object => {console.log(Object.values(object))}
    objectValues(lesson1);
    //5 
    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} ) 
    console.log(allLessons);
    //6 
    const nLesson1 = Object.values(allLessons.lesson1)[1];
    const nLesson2 = Object.values(allLessons.lesson2)[1];
    const nLesson3 = Object.values(allLessons.lesson2)[1];
    const sumOfStudents = nLesson1 + nLesson2 + nLesson3;
    console.log(sumOfStudents);
    //7
    const getValueByNumber = (object, position) => {
        Object.values(object[position]);
    }
    console.log(getValueByNumber(lesson1, 0));
    //8
    const verifyPair = (object, key, value) => {
        if (object[key] === value) {
            return true;
        }
        return false;
    }; 