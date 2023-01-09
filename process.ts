export async function processListen() {
    process.on("exit", () => {
        console.warn("Bot is off")
    })
}