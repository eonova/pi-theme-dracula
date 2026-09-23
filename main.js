/**
 * Pi Plugin Eonova — PI-Desktop plugin entry.
 *
 * The host injects the global `pi` object. Every call is gated by the
 * permissions declared in manifest.json, so widening what this file does
 * usually means widening `permissions` too.
 */

async function onLoad() {
  await pi.commands.register({
    id: "pi-plugin-eonova.open",
    title: "Pi Plugin Eonova: Open Panel",
    keywords: ["pi-plugin-eonova"],
    run: async () => {
      await pi.ui.openPanel({ title: "Pi Plugin Eonova" });
      await pi.ui.showToast("Hello from Pi Plugin Eonova");
    },
  });
}

async function onUnload() {
  await pi.commands.unregister("pi-plugin-eonova.open");
}

module.exports = { onLoad, onUnload };
