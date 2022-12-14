#!/usr/bin/env node

var fs = require("fs");

console.log("INFO: Validating git commit message.......");

var msg = fs
	.readFileSync(
		process.argv[2] ||
			process.env.GIT_PARAMS ||
			process.env.HUSKY_GIT_PARAMS,
		"utf8"
	)
	.replace(/\n/g, " ")
	.substr(0, 50);

var matchTest =
	/^(([A-Z]+-?\d+|Adhoc)\: (.+: )?(Added|Removed|BugFix|Modified|Feature|Merged|Refactored|Release): (.+){15,})$/g.test(
		msg
	);

var exitCode = matchTest ? 0 : 1;

if (exitCode === 0) {
	console.log("SUCCESS: Commit ACCEPTED.");
} else {
	console.log(
		"ERROR: Commit REJECTED. REASON: Your commit message: '" +
			msg +
			"' does not follow the commit message convention."
	);

	console.log(
		"Convention: '[JIRAID]: [Optional clientId]: [One Primary Change Type: Added|Removed|BugFix|Modified|Feature|Merged|Refactored|Release]: [Message describing the change. If absolutely necessary, you can add multiple Change types here.]"
	);

	console.log("Sample: IT-123: Added: git hook to validate commit message.");
}

process.exit(exitCode);
