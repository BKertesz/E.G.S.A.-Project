
commands = {print:{
    desc:"$print: This is a print command, returns a console log",
    arg:"*",
    func: print = (argument) =>{
        console.log(argument) }},
        
    printAll:{
        desc:"$printAll: Prints all data from database",
        arg:0,
        func: printAll = () => {
            allItems = []
            mockDb.forEach((element,index) => {
                allItems.push(element)
            })
            return allItems
        }
    },
    createCharacter:{
        desc:"$createCharacter: Takes one argument to create character",
        arg:1,
        func: createChar = (name) => {
            const char = new Character(name)
            mockDb.push(char)
            return "Character created"
        }
    },
    help:{
        desc:"$help: Gets the description of the commands.",
        arg:1,
        func: help = (otherFunc) => {
            return commands[otherFunc].desc
        }
    }
}

module.exports = commands