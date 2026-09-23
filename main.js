/**
 * pi-theme-dracula — PI-Desktop plugin entry.
 *
 * The host injects the global `pi` object. Every call is gated by the
 * permissions declared in manifest.json, so widening what this file does
 * usually means widening `permissions` too.
 */

async function onLoad() {
  await pi.commands.register({
    id: "pi-theme-dracula.open",
    title: "pi-theme-dracula: Open Panel",
    keywords: ["pi-theme-dracula"],
    run: async () => {
      await pi.ui.openPanel({ title: "pi-theme-dracula" });
      await pi.ui.showToast("Hello from pi-theme-dracula");
    },
  });
}

async function onUnload() {
  await pi.commands.unregister("pi-theme-dracula.open");
}

module.exports = { onLoad, onUnload };
