import * as nconf from "nconf";
import path from "path";

export class Config {
	public config = new nconf.Provider();
	constructor() {
		this.config
			.argv()
			.env("__")
			.file({ file: path.join(__dirname, "/appConfig.json") });
	}

	getConfig(key: string) {
		return this.config.get(key);
	}

	setConfig(key: string, value: string): boolean {
		return this.config.set(key, value);
	}
}
