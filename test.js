var expect = require("chai").expect
var wrapString = require("./index")

describe("wrap-string", function(){
  it("correctly wraps string", function(){
    var newString = wrapString({
      string: "Hello world",
      prepend: "*",
      append: "*"
    })
    expect(newString).to.equal("*Hello world*")
  })
})
