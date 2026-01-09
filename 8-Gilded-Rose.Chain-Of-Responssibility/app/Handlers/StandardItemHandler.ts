import { Item } from "@/Item";
import { ItemHandler } from "./ItemHandler";

export class StandardItemHandler extends ItemHandler {
  protected canHandle(_: Item): boolean {
    return true; // último de la cadena
  }

  protected update(item: Item): void {
    item.sellIn--;
    const degrade = item.sellIn < 0 ? 2 : 1;
    item.quality = Math.max(0, item.quality - degrade);
  }
}
