import { trimString } from "./string";

type LogType = "print" | "warn" | "error";

export class Logger {
	private header: string | undefined;

	constructor(header?: string) {
		this.header = header;
	}

	log = (message: unknown[], logType?: LogType, level?: number) => {
		let finalMessage = this.header ?? "";

		for (const str of message) {
			if (typeIs(str, "string")) finalMessage = trimString(`${finalMessage} ${str}`);
		}

		switch (logType) {
			case "warn":
				{
					warn(finalMessage);
				}
				break;

			case "error": {
				error(finalMessage, level);
			}

			default: {
				print(finalMessage);
			}
		}
	};
}
