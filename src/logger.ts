import { trimString } from "./string";

type LogType = "print" | "warn" | "error";

export class Logger {
	private header: string | undefined;

	constructor(header?: string) {
		this.header = header;
	}

	log = (message: string, logType?: LogType, level?: number) => {
		const finalMessage = trimString(`${this.header} ${message}`);

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
