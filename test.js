var jsdom = require('jsdom')
var window = jsdom.jsdom().defaultView
var document = window.document

var assign = require('object-assign')
var test = require('tape')

var withModifierKey = require('./index.js')

test('without modifier keys', function (t) {
  var a = document.createElement('a')
  document.documentElement.appendChild(a)

  a.addEventListener('click', function (e) {
    t.ok(!withModifierKey(e))
    t.end()
  })

  click(a)
})

test('with modifier keys', function (t) {
  var a = document.createElement('a')
  document.documentElement.appendChild(a)

  t.plan(4)

  a.addEventListener('click', function (e) {
    t.ok(withModifierKey(e))
  })

  click(a, { altKey: true })
  click(a, { ctrlKey: true })
  click(a, { metaKey: true })
  click(a, { metaKey: true, shiftKey: true })
})

function click (element, options) {
  options = options || {}

  var event = document.createEvent('HTMLEvents')
  event.initEvent('click', true, false)
  assign(event, options)
  element.dispatchEvent(event)
}
