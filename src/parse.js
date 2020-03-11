
import JSTool from "./JS.js";

class Parse {
    constructor() { }
    parseToHtml(data){
        const aa = function () {
            console.log('parseToHtml')
            console.log(data)
        }
        if (JSTool.isFunction(aa)) {
            aa()
            let res = {fff: data}
            return res
        }
    }
}
export default new Parse();


