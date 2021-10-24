export default class MyCyclicList<T> {
  private currentIndex = -1;

  constructor(private items: T[]) {
    if (items.length < 1) {
      throw new Error(`items can't be empty`);
    }
  }

  next(): T {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    return this.items[this.currentIndex];
  }
}
