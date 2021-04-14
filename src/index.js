const messages = [
    "Hola mundo!",
    "Compra oro",
    "El fin del mundo se acerca",
    "WATCH FOR THE UFOS",
    "L is Real",
    "ERAN HERMANOS WEY!"
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}


module.exports = {randomMsg};