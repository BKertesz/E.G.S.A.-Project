class Location{

    constructor(options){
        this.name = options[name]
        this.content = options[content]
        this.description = options[description]
        this.links = options[links]
    }

    linkLocation(location){
        this.links.push(location)
    }

    placeContent(object){
        this.content.oush(object)
    }
}

export default Location