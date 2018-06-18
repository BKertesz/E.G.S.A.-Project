

commands = {
    print:{
        desc:"This is a print command",
        arg:1,
        function: print = (argument) =>{
            console.log(argument)
        }
    },
    exit:{
        desc:"This is an exit command",
        arg:1,
        function: Location.createLocation()
    }
}

function execute(cmd){
    if(cmd[0] == "$"){
        // console.log("This is command")
        let newCmd = cmd.substring(1)
        newCmd = newCmd.split(" ")
        if(commands[newCmd[0]]){
            // console.log("This command exists and here it's description:")
            // console.log(commands[newCmd[0]].desc)
            if(commands[newCmd[0]].arg == 1){
                console.log("This cmd takes an argument")
                commands[newCmd[0]].function(newCmd[1])
            }
        }
        else{
            console.log("This command doesn't exist")
        }
    }
    else{
        console.log("This is not a command.")
    }

}

execute("$print My name is Bob Todd")
// execute("$exit")



    