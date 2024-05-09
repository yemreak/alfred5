import { exit } from "process"
import { response, type AlfredResult } from "."

jest.mock("process", () => ({
	exit: jest.fn(),
}))

describe("response", () => {
	let consoleLogSpy: jest.SpyInstance

	beforeEach(() => {
		consoleLogSpy = jest.spyOn(console, "log").mockImplementation()
	})

	afterEach(() => {
		consoleLogSpy.mockRestore()
	})

	it("should stringify results and call console.log with the correct format", () => {
		const mockResults: AlfredResult[] = [
			{ title: "Test Title", subtitle: "Test Subtitle", arg: "Test Arg" },
		]

		response(...mockResults)
		expect(consoleLogSpy).toHaveBeenCalledWith(
			JSON.stringify({ items: mockResults, skipknowledge: true })
		)
		expect(exit).toHaveBeenCalledWith(0)
	})
})
