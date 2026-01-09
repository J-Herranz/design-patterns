import { Item } from "@/Item";
import { ItemHandler } from "./ItemHandler";

export class ConjuredHandler extends ItemHandler {
  protected canHandle(item: Item): boolean {
    return item.name.startsWith("Conjured");
  }

  protected update(item: Item): void {
    item.sellIn--;
    const degrade = item.sellIn < 0 ? 4 : 2;
    item.quality = Math.max(0, item.quality - degrade);
  }
}
