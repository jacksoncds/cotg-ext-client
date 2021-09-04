export default class UI {
    constructor() {

    }

    snackbar(message, timeout = 5000){
        $('body').append(`
            <div style='position:absolute; top:0; left:40%'; width:10%; z-index:1010>${message}</div>
        `);
    }

    tokens() {
        
    }
}