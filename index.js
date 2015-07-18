module.exports = function withModifierKey (event) {
  return event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
}
