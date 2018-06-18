
const commands = require('./commandDictionary')

mockDb = []



const execute = (user,cmd) => {
    if(cmd[0] == "$"){
        let newCmd = cmd.substring(1)
        newCmd = newCmd.split(" ")
        if(commands[newCmd[0]]){
            if(commands[newCmd[0]].arg == 1 && newCmd[1]){
                return commands[newCmd[0]].func(newCmd[1])
            }

            else if(commands[newCmd[0]].arg == "*"){
                let func = newCmd.shift()
                // console.log(newCmd)
                let arguments = newCmd.join(" ")
                const result = commands[func].func(arguments)
                return result
            }

            else if(commands[newCmd[0]].arg == 0){
                return commands[newCmd[0]].func()
            }
        }
        else{
            return "This command doesn't exist"
        }
    }
    else{
        return `${user}:${cmd}`
    }

}

module.exports = execute;