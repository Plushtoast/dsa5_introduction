Hooks.once("init", function() {
    console.log("Initializing DSA5 introduction module")
    let moduleName = "dsa5-introduction"
    game.settings.register(moduleName, "initialized", {
        name: "Initialization",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    });

    game.settings.registerMenu(moduleName, "init-dialog", {
        name: "DSA5 Initialization",
        label: game.i18n.localize("initialize"),
        hint: game.i18n.localize("dsa5-introduction.importHint"),
        type: InitializerForm,
        restricted: true
    })
})

Hooks.once("ready", function() {
    if (!game.settings.get("dsa5-introduction", "initialized") && game.user.isGM)
        new InitializerForm().render()
})

class InitializerForm extends FormApplication {
    render() {
        new game.dsa5.apps.DSA5Initializer("DSA5 introduction module Initialization", game.i18n.format("dsa5-introduction.importContent", { defaultText: game.i18n.localize("importDefault") }), "dsa5-introduction", "dsa5-introduction.introductionjournal").render(true)
    }
}