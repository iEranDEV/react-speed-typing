import { useEffect } from "react";

function GameWords({ pendingWords, doneWords, handleKeyDown }: {pendingWords: string, doneWords: Array<{letter: string, correct: boolean}>, handleKeyDown: Function}) {

    useEffect(() => {
        document.getElementById('game_words')?.focus();
    }, [])

    return (
        <div id="game_words" onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} onClick={(e) => (e.target as HTMLElement).focus()} className="w-full border-2 items-center p-2 border-stone-400 rounded-xl overflow-hidden text-xl break-normal flex  whitespace-nowrap divide-x-2 divide-stone-700">
            <div className="w-1/2 flex whitespace-pre justify-end">
                {doneWords.map((letter,index) => {
                    return <p key={index} className={`${letter.correct ? 'bg-green-200' : 'bg-red-200'}`}>{letter.letter}</p>
                })}
            </div>
            <div className="w-1/2 flex whitespace-pre">
                {pendingWords}
            </div>
        </div>  
    )
}

export default GameWords;