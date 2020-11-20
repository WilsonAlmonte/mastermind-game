import { CodePeg, ResultPeg } from './enum';
export default class Mastermind {

    public code: CodePeg[];
    /**
     *
     */
    constructor(code: CodePeg[]) {
        this.code = code;
    }

    public getHints(guess: CodePeg[]): ResultPeg[] {
        let resultPeg: ResultPeg[] = [];
        let blackResultIndexes: number[] = [];
        let whiteResultIndexes: number[] = [];
        
        let guessIndex = 0;
        for (let guessCodePeg of guess) {
            let gotWhiteResult = false;
            let codeIndex = 0;

            for (let hiddenCodePeg of this.code) {
                //Check if there's a black result related to the codePeg, if not process it
                if (!blackResultIndexes.some(x => x == codeIndex)) {

                    if (hiddenCodePeg == guessCodePeg) {

                        if (codeIndex == guessIndex) {
                            this.processBlackResult(resultPeg,blackResultIndexes, whiteResultIndexes, codeIndex, gotWhiteResult)
                            break;
                        }
                        else if (!gotWhiteResult && !whiteResultIndexes.some(x => x == codeIndex)) {
                            gotWhiteResult = true;
                            resultPeg.push(ResultPeg.White);
                            whiteResultIndexes.push(codeIndex);
                        }
                    }
                }
                codeIndex++;
            }

            guessIndex++;
        }

        return resultPeg.sort((a, b) => b - a);
    }

    private processBlackResult(resultPeg:ResultPeg[], blackResultIndexes:number[], whiteResultIndexes:number[] ,codeIndex:number, gotWhiteResult:boolean){
        resultPeg.push(ResultPeg.Black);
        blackResultIndexes.push(codeIndex);
        if (gotWhiteResult) {
            // Drop the last white result that was added for at actual guessCodePeg iteration
            whiteResultIndexes.pop();
            // Drop white result from results array 
            let elementIndexToRemove = resultPeg.indexOf(ResultPeg.White);
            resultPeg.splice(elementIndexToRemove, 1);
        }
        if (whiteResultIndexes.some(x => x == codeIndex)) {

            let elementIndexToRemove = whiteResultIndexes.indexOf(codeIndex);
            whiteResultIndexes.splice(elementIndexToRemove, 1);

            elementIndexToRemove = resultPeg.indexOf(ResultPeg.White);
            resultPeg.splice(elementIndexToRemove, 1);
        }
    }

}