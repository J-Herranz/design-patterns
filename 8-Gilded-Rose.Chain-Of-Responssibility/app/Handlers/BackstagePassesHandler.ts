import { Item } from "@/Item";
import { ItemHandler } from "./ItemHandler";

export class BackstagePassesHandler extends ItemHandler {
  protected canHandle(item: Item): boolean {
    return item.name === "Backstage passes";
  }

  protected update(item: Item): void {
    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0; // después del concierto
      return;
    }

    // +3 si <= 5 días
    if (item.sellIn < 5 && item.quality < 50) {
        item.quality = item.quality + 3 > 50 ? 50 : item.quality + 3; 
        return;
    }
    
    // +2 si <= 10 días y > 5 días
    if (item.sellIn < 10 && item.quality < 50) {
        item.quality = item.quality + 2 > 50 ? 50 : item.quality + 2; 
        return;
    }

    // +1 si > 10 días
    if (item.quality < 50) item.quality++;
  }
}
