import {Mastermind, CodePeg} from '@/core';

describe('Mastermind', () => {
  it('Constructor works correctly', () => {
    let code = [CodePeg.Blue, CodePeg.Brown, CodePeg.Orange, CodePeg.Yellow];
    let mastermind = new Mastermind(code);
    console.log('Local code', code);
    console.log('class code', mastermind.code);
    expect(mastermind.code == code).toBe(true);
  })
})
