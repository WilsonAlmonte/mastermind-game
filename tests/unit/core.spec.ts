import {Mastermind, CodePeg, ResultPeg} from '@/core';

describe('Mastermind', () => {
  it('Constructor works correctly', () => {
    let code = [CodePeg.Blue, CodePeg.Brown, CodePeg.Orange, CodePeg.Yellow];
    let mastermind = new Mastermind(code);
    expect(mastermind.code == code).toBe(true);
  })
})



describe('Mastermind - no duplications', () => {

  it('Game Winner', () => {
    let code = [CodePeg.Blue, CodePeg.Brown, CodePeg.Orange, CodePeg.Yellow];
    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.Black, ResultPeg.Black, ResultPeg.Black];

    let result = mastermind.getHints(code); 
    expect(result).toStrictEqual(expectedResult);
  })
  
  it('Result: 2 black 2 white', ()=>{

    let code = [CodePeg.Blue, CodePeg.Orange, CodePeg.Red, CodePeg.Brown];
    let guess = [CodePeg.Blue, CodePeg.Red, CodePeg.Orange, CodePeg.Brown];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.Black, ResultPeg.White, ResultPeg.White];

    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 0 black 2 white', ()=>{

    let code = [CodePeg.Blue, CodePeg.Orange, CodePeg.Yellow, CodePeg.Brown];
    let guess = [CodePeg.Red, CodePeg.Blue, CodePeg.Orange, CodePeg.Green];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.White, ResultPeg.White];

    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 1 black 2 white', ()=>{

    let code = [CodePeg.Blue, CodePeg.Orange, CodePeg.Yellow, CodePeg.Green];
    let guess = [CodePeg.Red, CodePeg.Blue, CodePeg.Orange, CodePeg.Green];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.White, ResultPeg.White];
    
    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 0 black 0 white', ()=>{

    let code = [CodePeg.Brown, CodePeg.Yellow, CodePeg.Pink, CodePeg.Purple];
    let guess = [CodePeg.Red, CodePeg.Blue, CodePeg.Orange, CodePeg.Green];

    let mastermind = new Mastermind(code);
    let expectedResult:ResultPeg[] = [];
    
    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

})