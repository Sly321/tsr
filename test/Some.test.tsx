import * as React from "react"
import { shallow, ShallowWrapper } from "enzyme"

describe(`<SomeTest />`, () => {

	describe(`<div>asdf</div>`, () => {
		let tree: ShallowWrapper

		beforeAll(() => {
			tree = shallow(<div className="reality">reality</div>)
		})

		it(`fail test with enzyme matcher className`, () => {
			expect(tree).toHaveClassName("expectation")
		})

		it(`fail test with enzyme matcher text`, () => {
			expect(tree).toHaveText("expectation")
		})

		it(`fail test with enzyme matcher props`, () => {
			expect(tree).toHaveProp("expectation", "expectation")
		})

		it(`create a snapshot`, () => {
			expect(tree).toMatchSnapshot()
		})

	})

})