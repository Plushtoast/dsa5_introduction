Hooks.once("init", function() {
    console.log("Initializing DSA5 introduction module")

    game.settings.register("dsa5-introduction", "firstTimeStart", {
        name: "firstTimeStart",
        hint: "firstTimeStart",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
    if (!game.settings.get("dsa5-introduction", "firstTimeStart")) {
        let msg = game.i18n.localize('dsa5-introduction.welcome')
        ChatMessage.create(game.dsa5.apps.DSA5_Utility.chatDataSetup(msg))
        game.settings.set("dsa5-introduction", "firstTimeStart", true)
    }
    if (game.i18n.lang == "de") {
        game.dsa5.apps.journalBrowser.adventures.push({
            id: "Einführungsabenteuer",
            path: "modules/dsa5-introduction/adventurede.json",
            visible: false
        })
    } else {
        game.dsa5.apps.journalBrowser.adventures.push({
            id: "Introduction Adventure",
            path: "modules/dsa5-introduction/adventureen.json",
            visible: false
        })
    }

    game.dsa5.apps.DSA5_Utility.registerMasterTokens("dsa5-introduction")

})