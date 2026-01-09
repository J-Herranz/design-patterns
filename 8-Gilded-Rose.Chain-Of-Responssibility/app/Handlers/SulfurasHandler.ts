import { Item } from "@/Item";
import { ItemHandler } from "./ItemHandler";

export class SulfurasHandler extends ItemHandler {
  protected canHandle(item: Item): boolean {
    return item.name === "Sulfuras";
  }

  protected update(item: Item): void {
    // No cambia nunca
    // item.quality = 80;
  }
}
