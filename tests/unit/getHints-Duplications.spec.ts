import {Mastermind, CodePeg, ResultPeg} from '@/core';

describe('Mastermind', () => {
  it('Constructor works correctly', () => {
    let code = [CodePeg.Blue, CodePeg.Brown, CodePeg.Orange, CodePeg.Yellow];
    let mastermind = new Mastermind(code);
    expect(mastermind.code == code).toBe(true);
  })
})



describe('Mastermind - with Duplications', () => {

  it('Game Winner', () => {
    let code = [CodePeg.Blue, CodePeg.Blue, CodePeg.Orange, CodePeg.Red];
    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.Black, ResultPeg.Black, ResultPeg.Black];

    let result = mastermind.getHints(code); 
    expect(result).toStrictEqual(expectedResult);
  })
  
  it('Result: 2 black 2 white', ()=>{

    let code = [CodePeg.Blue, CodePeg.Blue, CodePeg.Red, CodePeg.Brown];
    let guess = [CodePeg.Blue, CodePeg.Red, CodePeg.Blue, CodePeg.Brown];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.Black, ResultPeg.White, ResultPeg.White];

    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 0 black 2 white', ()=>{

    let code = [CodePeg.Blue, CodePeg.Blue, CodePeg.Yellow, CodePeg.Brown];
    let guess = [CodePeg.Black, CodePeg.Red, CodePeg.Blue, CodePeg.Blue];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.White, ResultPeg.White];

    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 1 black 1 white', ()=>{

    let code = [CodePeg.Green, CodePeg.Red, CodePeg.Yellow, CodePeg.Blue];
    let guess = [CodePeg.Red, CodePeg.Red, CodePeg.Green, CodePeg.Green];

    let mastermind = new Mastermind(code);
    let expectedResult = [ResultPeg.Black, ResultPeg.White];
    
    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 3 black 0 white', ()=>{

    let code = [CodePeg.Red, CodePeg.Red, CodePeg.Red, CodePeg.Red];
    let guess = [CodePeg.Red, CodePeg.Blue, CodePeg.Red, CodePeg.Red];

    let mastermind = new Mastermind(code);
    let expectedResult:ResultPeg[] = [ResultPeg.Black, ResultPeg.Black, ResultPeg.Black];
    
    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);
  })

  it('Result: 0 black 1 white', ()=>{

    let code = [CodePeg.Red, CodePeg.Red, CodePeg.Red, CodePeg.Red];
    let guess = [CodePeg.Red, CodePeg.Blue, CodePeg.Blue, CodePeg.Blue];

    let mastermind = new Mastermind(code);
    let expectedResult:ResultPeg[] = [ResultPeg.Black];
    
    let result = mastermind.getHints(guess);
    expect(result).toStrictEqual(expectedResult);

  })

})