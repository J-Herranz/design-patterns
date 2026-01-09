import { AgedBrieHandler } from "./Handlers/AgedBrieHandler";
import { BackstagePassesHandler } from "./Handlers/BackstagePassesHandler";
import { ConjuredHandler } from "./Handlers/Conjured";
import { ItemHandler } from "./Handlers/ItemHandler";
import { StandardItemHandler } from "./Handlers/StandardItemHandler";
import { SulfurasHandler } from "./Handlers/SulfurasHandler";
import { Item } from "./Item";

export class GildedRose {
  private handler: ItemHandler;

  constructor(public items: Item[]) {
    this.handler = new AgedBrieHandler();
    this.handler
      .setNext(new BackstagePassesHandler())
      .setNext(new SulfurasHandler())
      .setNext(new ConjuredHandler())
      .setNext(new StandardItemHandler());
  }

  updateQuality(): void {
    for (const item of this.items) {
      this.handler.handle(item);
    }
  }
}