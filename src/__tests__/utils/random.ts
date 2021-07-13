class RandomGenerator {
  low: number;
  high: number;
  remaining:number[];

  constructor (high:number, low?:number) {
    this.high = high;
    this.low = low || 0;
    if (this.low > this.high) throw new Error("Illegal arguments low " + this.low + " high " + this.high);
    this.remaining = [];
    this.reset();
  }

  get() {
    if (!this.remaining.length) {
      this.reset();
    }
    const index = Math.floor(Math.random() * this.remaining.length);
    const val = this.remaining[index];
    this.remaining.splice(index, 1);
    return val;
  }

  reset() {
    this.remaining = [];
    for (let i = this.low; i <= this.high; i++) {
      this.remaining.push(i);
    }
  }
}

export const randomInt = (max:number, min?:number):number => {
  const r = new RandomGenerator(max, min);
  const rn = r.get();
  return rn;
}

export const randomOneOf = (items:Array<any>) => items[randomInt(items.length-1)]

const CHARS:string       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function randomId(length:number) {
  let result:string = '';
  for ( let i = 0; i < length; i++ ) {
    result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return result;
}
