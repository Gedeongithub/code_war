const validateHello = greetings => {
    const message = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj','czesc'];
    const lowermessage = greetings.toLowerCase()
    
     return message.some(greeting=> lowermessage.includes(greeting))
   }