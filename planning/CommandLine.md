# Command Line for the Game

## Description
The game's main feature is that it is text based. Soo the players communicate through text with each other and with the system. To invoke commands they need to use commands. I choose the standard syntax of '$'
Soo any command that starts with dollar sign will interpreted as a command.

# Input Logic
If the first character is not $ then send the message out to other players in the same Room else interpret it as a command.

If its a command splice of the $ from the begining.
Then splice up the command by spaces.

Take the first word and check it against the avaliable commands object.

Check how many arguments it takes.

Take the arguments from the input and channel them into the function stored in the object. 

Execute the command.