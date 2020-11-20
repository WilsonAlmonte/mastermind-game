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

        let blackResultIndexes:number[] = [];

        for(let guessCodePeg of guess){

            let codeIndex = 0;
            
            for(let hiddenCodePeg of this.code){
                //Check if there's a black result related to the codePeg, if not process it
                if(!blackResultIndexes.some(x => x==codeIndex)){
                    if(hiddenCodePeg == guessCodePeg){
                        if(codeIndex == guessIndex){
                            resultPeg.push(ResultPeg.Black);
                            blackResultIndexes.push(codeIndex);
                            break;
                        }
                        else{
                            resultPeg.push(ResultPeg.White);
                            break;
                        }
                    }
                }
                codeIndex++;
            }
            guessIndex++;
        }

        return resultPeg.sort((a, b) => a-b);
    }

}