import {
  sizesList,
  doughList,
  saucesList,
  ingredientsList,
} from "@/views/helper";

export const normalizePizza = ({ dough, ingredients, sauces, sizes }) => ({
  dough:
    dough &&
    dough.map((doughVariant, index) => ({
      ...doughVariant,
      scale: doughList[index],
    })),
  ingredients:
    ingredients &&
    ingredients.map((ingredient, index) => ({
      ...ingredient,
      ingredientName: ingredientsList[index],
      quantity: 0,
    })),
  sauces:
    sauces &&
    sauces.map((sauce, index) => ({
      ...sauce,
      sauceVariant: saucesList[index],
    })),
  sizes:
    sizes &&
    sizes.map((size, index) => ({
      ...size,
      scale: sizesList[index],
    })),
});

export const capitalize = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
