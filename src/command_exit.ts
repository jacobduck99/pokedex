
export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "",
        callback: commandHelp,
        },
    // can add more commands here
  };
}

export function commandExit() {
    console.log("Closing the pokedex... Goodbye!");
    process.exit(0);
};

export function commandHelp() {
    console.log("\n Welcome to the Pokedex!\n Usage:\n\n help: Displays a help message\n exit: Exit the Pokedex");
}
