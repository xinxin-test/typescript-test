function createSquare(config) {
    return {
        color: config.color ? config.color : 'red',
        area: config.width ? config.width * config.width : 0
    };
}
var mySquare = createSquare({ colour: "red", width: 100 });
