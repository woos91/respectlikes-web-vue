class BufferWorks<T> {
	constructor(addItem?: T) {
		if (addItem) {
			this.push(addItem);
		}
	}
	private _data: T[] = [];
	autoNextStart: boolean = true;
	private _isWorking: boolean = false;
	get data(): T[] {
        return this._data;
    }
	get isWorking(): boolean {
        return this._isWorking;
    }
	set isWorking(arg:boolean) {
        this._isWorking = arg;
    }
	private get _nextWork():T|undefined {
		if (!this._isWorking) {
			if (this.autoNextStart) return this.next();
			else return undefined;
		} else {
			return undefined;
		}
	}
	push(item: T): void {
		this._data.push(item);
	}
	set(item: T): T | undefined {
		console.log("_isWorking", this._isWorking)
		this._data.push(item);
		return this._nextWork;
	}
	pushList(list: T[]): T | undefined {
		for (let item of list) {
			this._data.push(item);
            if (item === undefined) break;
        }
		return this._nextWork;
	}

	private pop(): T | undefined {
		return this._data.pop();
	}
	complete():T | undefined {
		if (this.autoNextStart) {
			return this.next();
		} else
		return undefined;
	}
	next():T | undefined {
		if (this._data.length > 0) {
			this._isWorking = true;
			return this.pop();
		} else {
			this._isWorking = false;
			return undefined;
		}
	}
}

export default BufferWorks;