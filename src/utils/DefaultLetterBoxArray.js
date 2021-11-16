import React from "react";
import LetterBox from "../components/LetterBox";
import {colors} from "../theme";

let leftLetters = [];
leftLetters[0] = <LetterBox text="A" key={1} backgroundColor={colors.secondary} />
leftLetters[1] = <LetterBox text="B" key={2} backgroundColor={colors.secondary} />
leftLetters[2] = <LetterBox text="C" key={3} backgroundColor={colors.secondary} />
leftLetters[3] = <LetterBox text="D" key={4} backgroundColor={colors.secondary} />
leftLetters[4] = <LetterBox text="E" key={5} backgroundColor={colors.secondary} />
leftLetters[5] = <LetterBox text="F" key={6} backgroundColor={colors.secondary} />
leftLetters[6] = <LetterBox text="G" key={7} backgroundColor={colors.secondary} />
leftLetters[7] = <LetterBox text="H" key={8} backgroundColor={colors.secondary} />
leftLetters[8] = <LetterBox text="I" key={9} backgroundColor={colors.secondary} />
leftLetters[9] = <LetterBox text="J" key={10} backgroundColor={colors.secondary} />
leftLetters[10] = <LetterBox text="K" key={11} backgroundColor={colors.secondary} />
leftLetters[11] = <LetterBox text="L" key={12} backgroundColor={colors.secondary}/>
leftLetters[12] = <LetterBox text="M" key={13} backgroundColor={colors.secondary} />


let rightLetters = [];
rightLetters[0] = <LetterBox text="N" key={14} backgroundColor={colors.secondary} />
rightLetters[1] = <LetterBox text="O" key={15} backgroundColor={colors.secondary} />
rightLetters[2] = <LetterBox text="P" key={16} backgroundColor={colors.secondary} />
rightLetters[3] = <LetterBox text="Q" key={17} backgroundColor={colors.secondary} />
rightLetters[4] = <LetterBox text="R" key={18} backgroundColor={colors.secondary} />
rightLetters[5] = <LetterBox text="S" key={19} backgroundColor={colors.secondary} />
rightLetters[6] = <LetterBox text="T" key={20} backgroundColor={colors.secondary} />
rightLetters[7] = <LetterBox text="U" key={21} backgroundColor={colors.secondary} />
rightLetters[8] = <LetterBox text="V" key={22} backgroundColor={colors.secondary} />
rightLetters[9] = <LetterBox text="W" key={23} backgroundColor={colors.secondary} />
rightLetters[10] = <LetterBox text="X" key={24} backgroundColor={colors.secondary} />
rightLetters[11] = <LetterBox text="Y" key={25} backgroundColor={colors.secondary} />
rightLetters[12] = <LetterBox text="Z" key={26} backgroundColor={colors.secondary} />
rightLetters[13] = <LetterBox text=" " key={27} backgroundColor={colors.secondary} />

export {leftLetters, rightLetters};