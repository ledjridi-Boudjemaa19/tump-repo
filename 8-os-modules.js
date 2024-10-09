const os = require("os")
let user = os.userInfo()
console.log(user);
console.log(`the system uptime is : ${os.uptime()} seconds `)
console.log(`the system freemem is : ${os.freemem}`)

const CurrnetOS = {
    name  : os.type(),
    release: os.release(),
    TotalMEM :os.totalmem(),
    Freemem : os.freemem()
}
console.log(CurrnetOS);
