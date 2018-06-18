commands = {print:{
    desc:"This is a print command, returns a console log",
    arg:1,
    func: print = (argument) =>{
        console.log(argument) }}}

const execute = (user,cmd) => {
    // console.log("This works too")
    if(cmd[0] == "$"){
        let newCmd = cmd.substring(1)
        newCmd = newCmd.split(" ")
        // console.log(newCmd)
        // console.log(commands)
        if(commands[newCmd[0]]){
            // console.log('This command exist')
            if(commands[newCmd[0]].arg == 1 && newCmd[1]){
                commands[newCmd[0]].func(newCmd[1])
            }
        }
        else{
            return "This command doesn't exist"
        }
    }
    else{
        return "This is not a command."
    }

}

module.exports = execute;