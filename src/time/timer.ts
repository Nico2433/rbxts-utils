import { RunService } from "@rbxts/services";

interface Task {
	id: number;
	isRunning: boolean;
	init: number;
	elapsed: number;
	interval: number;
	isTimeout?: boolean;
	safeExec: () => void;
}

type CallBack = () => void;

export class Timer {
	private lastId: number = 0;
	private tasks: Task[] = [];
	private max_calls: number;
	private max_safe_int: number = 9007199254740991;

	constructor(maxCalls?: number) {
		this.max_calls = maxCalls ?? 30;

		RunService.Heartbeat.Connect((dt) => {
			const toRemove: Task[] = [];

			let count = 0;
			for (const task of this.tasks) {
				if (task.isRunning) continue;

				task.elapsed = task.elapsed + dt * 1000;

				if (task.elapsed >= task.interval) {
					task.elapsed = task.elapsed - task.interval;

					if (task.isTimeout) toRemove.push(task);
					coroutine.wrap(task.safeExec)();

					count = count + 1;
					if (count > this.max_calls) break;
				}
			}

			for (const task of toRemove) {
				const pos = toRemove.findIndex((tas) => tas.id === task.id);
				if (pos !== -1) this.tasks.remove(pos);
			}
		});
	}

	createTimer = (callback: CallBack, delay?: number, isTimeout?: boolean) => {
		let id = this.lastId;
		id = id + 1;

		let finalDelay = delay ?? 0;
		finalDelay = math.min(this.max_safe_int, finalDelay);

		const task = {} as Task;

		task.id = id;
		this.lastId = id;

		task.safeExec = () => {
			task.isRunning = true;
			const [success, err] = pcall(callback);

			task.isRunning = false;
			task.elapsed = 0;

			if (!success) warn(err);
		};

		task.isTimeout = isTimeout;
		task.elapsed = 0;
		task.init = os.clock();
		task.interval = finalDelay;
		this.tasks.push(task);

		return id;
	};

	setInterval = (callback: CallBack, delay?: number) => {
		return this.createTimer(callback, delay, false);
	};

	setTimeout = (callback: CallBack, delay?: number) => {
		return this.createTimer(callback, delay, true);
	};

	clear = (id: number) => {
		const pos = this.tasks.findIndex((task) => task.id === id);
		if (pos !== -1) this.tasks.remove(pos);
	};

	clearAll = () => this.tasks.clear();
}
