import { RuleTester } from "eslint";
import noEmojiInString from "../rules/no-emoji-in-string";

const ruleTester = new RuleTester({
	parserOptions: {
		ecmaVersion: 2022,
		souceType: "module",
		node: true,
		browser: true,
	},
});

ruleTester.run("Testing no-emoji-in-string rule", noEmojiInString, {
	valid: [{ code: "const x = 'hello2'" }, { code: "const y='ppp'" }],
	invalid: [
		{
			code: "const test ='hello1 😊'",
			errors: [{ messageId: "emojiInStringNotAllowed" }],
		},
	],
});
