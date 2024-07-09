/**
 * Observer pattern
 *
 * Read more about this pattern at:
 * @link https://www.patterns.dev/vanilla/observer-pattern
 */
class Observable {
  constructor() {
    this.observers = []
  }

  subscribe(func) {
    this.observers.push(func)
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((subscriber) => subscriber !== func)
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

export default new Observable()
