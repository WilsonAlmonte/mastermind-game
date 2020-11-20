import { CodePeg } from '@/core';

export default class CodeColorHelper {
    static colors: string[] = ["#dc3545","#76ff76","#4e4eff","#ffff38","#691818","#f5b94b","#000","White"];

    static getColorFromCodePeg(codePeg:CodePeg){
        
        return this.colors[codePeg];
    }
}