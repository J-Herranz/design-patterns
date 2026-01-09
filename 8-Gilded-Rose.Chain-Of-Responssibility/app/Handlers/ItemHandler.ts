import { Item } from "@/Item";

export abstract class ItemHandler {
  protected next?: ItemHandler;

  setNext(handler: ItemHandler): ItemHandler {
    this.next = handler;
    return handler;
  }

  handle(item: Item): void {
    if (this.canHandle(item)) {
      this.update(item);
    } else if (this.next) {
      this.next.handle(item);
    }
  }

  protected abstract canHandle(item: Item): boolean;
  protected abstract update(item: Item): void;
}
