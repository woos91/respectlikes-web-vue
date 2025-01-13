class FillSort {
    private elem:HTMLElement|null=null; 
    private deviceWds:number[]=[800, 1400, 1800];
    private margin:number=0; 
    private rowEa:number = 1;
    private refreshDelayMs:number=500;
    private childClassName:string="sort-item";
    private rows:number[] = [];
    private refrashTimer:any|null = null;
    
    constructor(elem:HTMLElement, childClassName?:string|undefined, deviceWds?:number[]|undefined, margin?:number|undefined, refreshDelayMs?:number|undefined) {
        this.elem = elem as HTMLElement;
        if (childClassName !== undefined) this.childClassName = childClassName;
        if (deviceWds !== undefined) this.deviceWds = deviceWds;
        if (margin !== undefined) this.margin = margin;
        if (refreshDelayMs !== undefined) this.refreshDelayMs = refreshDelayMs;
    }
    public start() {
        if (!(this.elem instanceof HTMLElement)) return;
        this.refresh();
        this.refrashTimer = setInterval(()=>this.refresh(), this.refreshDelayMs);
        this.elem.style.display = "block";
        if (window.getComputedStyle(this.elem).position === "" || window.getComputedStyle(this.elem).position === "static") {
            this.elem.style.position = "relative";
        }
    }
    public endRefresh():void {
        if (this.refrashTimer !== null) clearInterval(this.refrashTimer);
    }
    public refresh():void {
        if (!(this.elem instanceof HTMLElement)) return;
        this.rows = [];
        this.rowEa = this.setRowEa();
        let list:HTMLCollection = this.elem.children;// , "."+this.childClassName);
        let itemWd = (this.elem.clientWidth - (this.margin*(this.rowEa-1))) / this.rowEa;
        for (let i=0; i<this.rowEa; i++) {
            this.rows[i] = 0;
        }
        let max:number = 0;
        for (let i=0, item; i<list.length; i++) {
            let itm = list[i] as HTMLElement;
            itm.style.width = itemWd+'px';
            let row = choiceLine(this.rows);
            itm.style.position = 'absolute';
            itm.style.left = row*itemWd + (row*this.margin) + 'px'
            itm.style.top = this.rows[row] + 'px'
            this.rows[row] += itm.offsetHeight+this.margin;
            max = this.rows[row]-this.margin;
        }
        this.elem.style.height = max+'px';
        function choiceLine(rows:number[]):number {
            const rowEa:number = rows.length;
            let line:number = 0, row:number = 0;
            for (let i=0; i<rowEa; i++) {
                if (i===0) { 
                    row = 0;
                    line = rows[0];
                } else {
                    if (rows[i]<line) {
                        row = i;
                        line = rows[i]
                    }
                }
            }
            return row;
        }
    }
    private setRowEa():number {
        for (let i=0; i< this.deviceWds.length; i++) {
            if (window.innerWidth <= this.deviceWds[i]) return i+1;
        }
        return this.deviceWds.length+1;
    }
}

export default FillSort;