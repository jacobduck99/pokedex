export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        // can add more commands here
    };
}
export function commandExit() {
    console.log("Closing the pokedex... Goodbye!");
    process.exit(0);
}
;
