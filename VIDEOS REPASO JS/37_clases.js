//fue implementado en es6
class Button{
    constructor(label, callback){
        this.label = label;
        this.html = this.createHTML();
        this.bindEvents();
        this.callback = callback;
    }

    onClick(){
        this.callback();
    }

    bindEvents(){
        this.html.addEventListener("click",this.onClick.bind(this));
    }

    createHTML(){
        let btn = document.createElement("button");
        btn.innerHTML = this.label;
        return btn;
    } 
    getHTML(){
        return this.html;
    }

    static compare(a,b){
        return a.label === b.label;
    }
};

class ButtonImage extends Button{
    constructor(url, callback){
        super(null, callback);
        this.setURL(url);
    }

    setURL(url){
        this.html.src = url;
    }

    createHTML(){
        let img = document.createElement("img");
        return img;
    }
}

let button = new Button("Click", function(){
    console.log("!click.....")
});
document.body.appendChild(button.getHTML()) 

let imgButton = new ButtonImage("https://frasesparami.com/wp-content/uploads/2019/09/imagenes-bonitas.jpg",function(){
    console.log("Soy la imagen con click")
});
document.body.appendChild(imgButton.getHTML());

let button2 = new Button("Click...", function(){
    console.log("!click........")
});

console.log(Button.compare(button, button2));