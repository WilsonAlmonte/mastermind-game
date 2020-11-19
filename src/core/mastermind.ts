import { CodePeg, ResultPeg } from './enum';
export default class Mastermind{
    
    public code:CodePeg[]; 
    /**
     *
     */
    constructor(code:CodePeg[]) {
        this.code = code;        
    }

    public getHints(guess:CodePeg[]):ResultPeg[] {
        let resultPeg:ResultPeg[] = [];
        let guessIndex = 0;
        
        for(let guessCodePeg of guess){

            let codeIndex = 0;
            let whiteResultIndex:number = -1;
              
            for(let hiddenCodePeg of this.code){
                if(hiddenCodePeg == guessCodePeg){

                    if(codeIndex == guessIndex){
                        resultPeg.push(ResultPeg.Black);
                    }

                }
                codeIndex++;
            }
            guessIndex++;
        }

        return resultPeg;
    }

}