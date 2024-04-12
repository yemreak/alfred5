import { exit } from "process"

/**
 * Represents a result item for Alfred Workflows.
 *
 * @see {@link https://www.alfredapp.com/help/workflows/inputs/script-filter/json/} for more details on Alfred's JSON format.
 */
export type AlfredResult = {
	/**
	 * A unique identifier for the item, allowing Alfred to learn about the item for subsequent sorting and ordering.
	 * @example "uid": "desktop"
	 */
	uid?: string

	/**
	 * Specifies the type of the result. Use "file" for results that represent a file or folder and "default" for general actions.
	 * @example "type": "file"
	 */
	type?: "file" | "default"

	/**
	 * The title displayed in the result row.
	 * @example "title": "Desktop"
	 */
	title: string

	/**
	 * An optional subtitle displayed in the result row.
	 * @example "subtitle": "~/Desktop"
	 */
	subtitle?: string

	/**
	 * Argument passed to the related action when a result is selected.
	 * @example "arg": "~/Desktop"
	 */
	arg?: string

	/**
	 * Represents the icon displayed next to the result in Alfred.
	 * @example
	 * "icon": {
	 *     "type": "fileicon",
	 *     "path": "~/Desktop"
	 * }
	 */
	icon?: {
		/**
		 * Specifies the icon type. Use "fileicon" for actual file or folder icons and "filetype" for icons based on the file type. If not specified, path is used as a icon.
		 */
		type?: "fileicon" | "filetype"

		/**
		 * Path for the icon or the file path to derive an icon based on the file type.
		 * @example "path": "~/Desktop"
		 */
		path: string
	}

	/**
	 * Specifies if the result is selectable or not.
	 * @example "valid": true
	 */
	valid?: boolean

	/**
	 * Words that Alfred matches against when filtering results.
	 * @example "match": "my family photos"
	 */
	match?: string

	/**
	 * Text to auto-complete in Alfred's search field upon selection.
	 * @example "autocomplete": "Desktop"
	 */
	autocomplete?: string

	/**
	 * Modifiers that alter the result's behavior when certain keys are pressed.
	 * @example
	 * "mods": {
	 *     "alt": {
	 *         "valid": true,
	 *         "arg": "alfredapp.com/powerpack/",
	 *         "subtitle": "https://www.alfredapp.com/powerpack/"
	 *     }
	 * }
	 */
	mods?: {
		alt?: {
			valid?: boolean
			arg?: string
			subtitle?: string
		}

		cmd?: {
			valid?: boolean
			arg?: string
			subtitle?: string
		}
	}
}

export function response(...results: Readonly<AlfredResult[]>): never {
	console.log(JSON.stringify({ items: results, skipknowledge: true }))
	exit(0)
}
