function GameData({ value, name}: {value: any, name: string}) {

    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <div className="bg-stone-200 rounded-xl flex justify-center items-center w-16 h-16 font-bold text-stone-700 text-3xl aspect-square">
                {value}
            </div>
            <span className="text-sm font-semibold tracking-wider text-stone-500">{name}</span>
        </div>
    )

}

export default GameData;