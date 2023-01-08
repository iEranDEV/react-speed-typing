import { useState } from "react";
import Countdown from "./Countdown";
import GameData from "./GameData";
import randomWords from 'random-words';
import GameWords from "./GameWords";

function Game() {
    // State variables
    const [status, setStatus] = useState(false);
    const [pendingWords, setPendingWords] = useState(randomWords(10).join(' '));
    const [doneWords, setDoneWords] = useState(Array<{letter: string, correct: boolean}>());

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        setStatus(true);
        if(pendingWords[0] === e.key) {
            let newVal = pendingWords.substring(1);
            newVal = newVal + ' ' + randomWords(1);
            setPendingWords(newVal);
            setDoneWords([...doneWords, {letter: e.key, correct: true}]);
        } else {
            setDoneWords([...doneWords, {letter: e.key, correct: false}]);
        }
    }

    return (
        <div className="focus:border-none w-full h-full flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col gap-2 justify-center items-center">
				<p className="tracking-wider uppercase text-stone-400 font-semibold">Typing speed test</p>
                <h1 className="text-stone-700 font-bold text-3xl">Test your typing skills</h1>
			</div>
            <div className="w-full flex flex-col-reverse gap-4 md:flex-row md:w-[40rem] justify-between items-center">
                <Countdown status={status}></Countdown>
                <div className="flex justify-center md:justify-end items-center gap-8 w-full">
                    <GameData value={'0'} name={'words/min'}></GameData>
                    <GameData value={'0'} name={'chars/min'}></GameData>
                    <GameData value={'0'} name={'% accuracy'}></GameData>
                </div>
            </div>
            <div className="w-full md:w-[40rem] px-4">
                <GameWords handleKeyDown={handleKeyDown} doneWords={doneWords} pendingWords={pendingWords}></GameWords>
            </div>
		</div>
    )
}

export default Game;