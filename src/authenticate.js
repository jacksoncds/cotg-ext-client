import UI from './ui';

export default class {
    constructor(router, ui){
        this.bindExportPlayerRoutes(router);
        this.ui = ui;
    }

    bindExportPlayerRoutes(router){
        router.bind('/authenticate', (req) => {
            if(req.status == 200){
                sessionStorage.setItem('app.cotg.ext.token', req.token);
            } else {
                this.ui.snackbar(req.data.message);
            }
        });
    }
}