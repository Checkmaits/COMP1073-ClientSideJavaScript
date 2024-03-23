import { round } from "./utils";

export class Smoothie {
  constructor(flavour, size, addons) {
    this.flavour = flavour;
    this.size = size;
    this.addons = addons;
  }

  /**
   * Calculates the price of the smoothie based on the flavour, size and addons
   *
   * Flavour prices:
   * - Vanilla $2.95
   * - Strawberry $3.25
   * - Blueberry $3.25
   * - Raspberry $3.50
   * - Rainbow Twist $4.00
   *
   * Size prices:
   * - Small 1x
   * - Medium 1.25x
   * - Large 2x
   *
   * Addon prices:
   * - Xtra Protein $1.00
   * - Flavour Booster $0.75
   *
   * @returns the price of the smoothie
   */
  calculatePrice() {
    const flavourPrices = {
      vanilla: 2.95,
      strawberry: 3.25,
      blueberry: 3.25,
      raspberry: 3.5,
      rainbowTwist: 4.0,
    };

    const sizes = {
      small: 1,
      medium: 1.25,
      large: 2,
    };

    const addonPrices = {
      xtraProtein: 1.0,
      flavourBooster: 0.75,
    };

    var price = flavourPrices[this.flavour] * sizes[this.size];
    this.addons.forEach(function (addon) {
      price += addonPrices[addon];
    });

    return round(price);
  }
}
