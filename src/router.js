export default class Router {
    constructor(){
        this._routes = [];
    }

    bind(path, func){
        if(!path || typeof path !== 'string'){
            throw new Error('Path must be a valid string.');
        }
    
        if(!func || typeof func !== 'function'){
            throw new Error('Function must be a valid function type.');
        }
    
        this._routes.push({
            path: path,
            callback: func
        });
    }

    route(path, req, socket){
        let index = this._routes.findIndex(
            r => r.path === path);
        
        if(index > -1){
            this._routes[index].callback(req, socket);
        }
    }
}
