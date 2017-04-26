export default class MessageBox{

    constructor(message){
        this._message = message;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    show(){
    }
}