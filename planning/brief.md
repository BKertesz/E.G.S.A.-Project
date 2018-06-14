# Expandable Game System App (EGSA)
## Introduction
A front and backend project written in javascript. Serving the purpose of creating a fully customizable RolePlaying experience. The project tries to help with the problems with many known game rule system like D & D and such by automatizing many aspects. But still maintining its free form. And for the best of all its still fully customizable.

The front end runs on React and handles all the player interactions, but all the game logic is runned on the backend. What this means the every action done in the game is pushed back to the server and gets emitted from the server to other users aswell.

## Game Details: 
### Admin or GM roles
Once connecting to the game site, they are welcomed with the HUB. Here they can choose to create a new Room that will serve as the location for all of their creations.
In the room they can customize everything soo the first recommended action is to create a welcome that every new player will see when they connect. This could include character creation and lore setup.
From here the admin can create four different type of object and "place" them.
Everything in the game's logic is either a Location, Item, Character, Event.
The admin can create and manipulate all of this with commands

### Player roles
Player can go on the Hub and login to a room from the avaliable ones. Here they are welcomed by a description that the admin setup that will tell more about the room and how it works. 
Usually after this they would either generate a new character or grab an existing one. And they are put to a location specified by the admin.
From here they are free to explore this room all of its locations and items,characters etc. The game's end scenario is specified by the admin and not forced by EGSA at all.

### Game Objects
#### Location
Locations can be created,linked and deleted.
Locations can be linked to other locations
Location have names, descriptions and content. The content can be items,characters and events.

#### Item
An item can be created,placed and destoryed.
An item can have stats, description and name.
An item can be picked up and droped by a character.
Item can be traded from Character to Character.

#### Character
A character can be created, placed and destoyed.
A character has a name, stats, location and description.
A chracter has an inventory where they can store and manipulate items.
A character can travel from location to location in every avaliable direction.

#### Event
An event can be created, used and destoryed.
When an event is happening it can effect a location or a player or an item.
An event have a name, a description and an effect.
Effect can be customized such as lowering a stat, changing a description etc. But only in the limits of already created propertys.
An event can spawn an item, character or link a location to an other. But in reality it doesn't create anything on fly. It just manipulates already existing assets.


## MVP
- Be able to see the HUB and create a Room
- Be able to create Items, Characters, Locations
- Be able to link Locations
- Be able to place items and characters
- Have a scope soo players can only effect a room and their location

## Extension
- Be able to create events that can manipulate other room assets
- Be able to use commands via a parser
- Add data persistance and create Themes
> Theme is a package where all room assets are stored in
- Be able to copy Themes between rooms.
