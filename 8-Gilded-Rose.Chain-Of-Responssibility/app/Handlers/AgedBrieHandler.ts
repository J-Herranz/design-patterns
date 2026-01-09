import { Item } from "@/Item";
import { ItemHandler } from "./ItemHandler";

export class AgedBrieHandler extends ItemHandler {
  protected canHandle(item: Item): boolean {
    return item.name === "Aged Brie";
  }

  protected update(item: Item): void {
    item.sellIn--;
    item.quality = Math.min(50, item.quality + (item.sellIn < 0 ? 2 : 1));
  }
}
