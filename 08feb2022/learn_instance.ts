interface demo {
    example(): string;
    }
    class demo1 implements demo {
    constructor(private ns: number) {}
    example() {
    return Array(this.ns + 1).join(" ");
    }
    }
    class demo2 implements demo {
    constructor(private vl: string) {}
    example() {
    return this.vl;
    }
    }
    function examp() {
    return Math.round(764.9834733746928374) < 10000000
    ? new demo1(79)
    : new demo2("  ");
    }
    let pads: demo = examp();
    if (pads instanceof demo1) {
    console.log("Welcome To My Domain its a second example \n")
    console.log(pads);
    }
    if (pads instanceof demo2) {
    console.log("Welcome To My Domain its a second example \n")
    console.log(pads)
    }