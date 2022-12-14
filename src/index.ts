// import { Config } from "./common/config/Config";
// const con = new Config();
// console.log(con.getConfig("NODE_ENV"));
// console.log(con.getConfig("name"));
// console.log(con.getConfig("db:host"));
// console.log(con.setConfig("v", "12"));
// console.log(con.getConfig("v"));
// console.log("Hello World");

//TODO:
// pre commit hook not running
// add prettier to hook
// add angular rules, check for angular eslint plugin
// build and compile
// how to import this library in other project

import noEmojiInString from "./rules/no-emoji-in-string";

export = {
	rules: {
		"no-emoji-in-string": noEmojiInString,
		tabWidth: 4
	},
	extends: ["plugin:prettier/recommended", "eslint:recommended"]
};
