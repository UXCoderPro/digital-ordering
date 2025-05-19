import wings from "../assets/product/Chicken/wings.jpg";
import grill from "../assets/product/Chicken/grill-combo.jpg";
import grillCombo from "../assets/product/Chicken/grill2.jpg";
import curry from "../assets/product/Chicken/curry.jpg";
import currySpicy from "../assets/product/Chicken/spicyCurry.jpg";
import curryMild from "../assets/product/Chicken/mildCurry.jpg";
import egg from "../assets/product/Chicken/egg.jpg";
import extraCurry from "../assets/product/Chicken/extraCurry.jpg";
import butter from "../assets/product/Chicken/butter.jpg";

import mutton from "../assets/product/Mutton/mutton.jpg";
import muttonCombo from "../assets/product/Mutton/muttonCombo.jpg";
import muttonCoke from "../assets/product/Mutton/muttonCoke.jpg";
import muttonMayo from "../assets/product/Mutton/muttonMayo.jpg";
import muttonBriyani from "../assets/product/Mutton/muttonbriyani.jpg";
import muttonCurry from "../assets/product/Mutton/mutton-curry.jpg";
import muttonBone from "../assets/product/Mutton/muttonBone.jpg";
import muttonBoneless from "../assets/product/Mutton/muttonBoneless.jpg";
import fries from "../assets/product/Mutton/frenchFries.jpg";

import beef from "../assets/product/Beef/Beef.jpg";
import beefCoke from "../assets/product/Beef/beefCoke.jpg";
import beefMeal from "../assets/product/Beef/beefMeal.jpg";
import beefCurry from "../assets/product/Beef/beefCurry.jpg";
import beefRoast from "../assets/product/Beef/beefRoast.jpg";
import beefGravy from "../assets/product/Beef/beefGravy.jpg";
import beefThick from "../assets/product/Beef/beefThick.jpg";
import beefThin from "../assets/product/Beef/beefThin.jpg";
import beefLiver from "../assets/product/Beef/beefLiver.jpg";
import beefMeat from "../assets/product/Beef/beefMeat.jpg";

import briyani from "../assets/product/briyani/briyani.jpg";
import beefBriyani from "../assets/product/briyani/beefBriyani.jpg";
import dumBriyani from "../assets/product/briyani/dumBriyani.jpg";
import eggBriyani from "../assets/product/briyani/eggBriyani.jpg";
import muttonBriyanii from "../assets/product/briyani/muttonBriyani.jpg";
import seeragaBriyani from "../assets/product/briyani/seeragaBriyani.jpg";
import brinjal from "../assets/product/briyani/brinjal.jpg";

import extraIce from "../assets/product/Drinks/extraIce.jpg";
import friutPuch from "../assets/product/Drinks/fruitPunch.jpg";
import lemonIced from "../assets/product/Drinks/lemonIced.jpg";
import lemonSliced from "../assets/product/Drinks/lemonSliced.jpg";
import lessSugar from "../assets/product/Drinks/lessSugar.jpg";
import mangoSmoothie from "../assets/product/Drinks/mangoSmoothie.jpg";
import mintMojito from "../assets/product/Drinks/mintMojito.jpg";
import mixedFruits from "../assets/product/Drinks/mixedFruits.jpg";
import normalTea from "../assets/product/Drinks/normalTea.jpg";
import stawberry from "../assets/product/Drinks/stawberry.jpg";

import vegmeals from "../assets/product/Meals/vegMeals.jpg";
import nonVeg from "../assets/product/Meals/nonVeg.jpg";
import fishMeals from "../assets/product/Meals/fishMeals.jpg";
import thaalimeals from "../assets/product/Meals/thaaliMeals.jpg";

const productInfo = [
  // 🐔 Chicken
  {
    id: 1,
    name: "Spicy Chicken Wings",
    cost: "$3.50",
    image: wings,
    description: "Crispy and spicy chicken wings tossed in a hot sauce.",
    category: "Chicken",
  },
  {
    id: 2,
    name: "Chicken Grill Combo",
    cost: "$5.90",
    image: grill,
    description: "Grilled chicken served with fries, salad, and dip.",
    category: "Chicken",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Grill + French Fries + Pepsi", price: 0, cover: grill },
          {
            name: "Grill + Fries + Coke + Burger",
            price: 1,
            cover: grillCombo,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Butter Chicken",
    cost: "$4.75",
    image: butter,
    description: "Rich and creamy butter chicken cooked in tomato gravy.",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Chicken Curry",
    cost: "$4.25",
    image: curry,
    description: "Aromatic chicken curry cooked with traditional spices.",
    category: "Chicken",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Spicy", price: 0, cover: currySpicy },
          { name: "Mild", price: 1, cover: curryMild },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Boiled Egg", price: 1, cover: egg },
          { name: "Extra Gravy", price: 2, cover: extraCurry },
        ],
      },
    ],
  },

  // 🐐 Mutton
  {
    id: 5,
    name: "Mutton Sukka",
    cost: "$6.80",
    image: mutton,
    description: "Dry-fried mutton cubes cooked in chettinad style.",
    category: "Mutton",
  },
  {
    id: 6,
    name: "Mutton Combo Special",
    cost: "$7.90",
    image: muttonCombo,
    description: "Mutton gravy, rice, egg, and side salad combo.",
    category: "Mutton",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Mutton Gravy + Coke", price: 0, cover: muttonCoke },
          {
            name: "Mutton Chukka + mayo",
            price: 1,
            cover: muttonMayo,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Mutton Biryani",
    cost: "$8.30",
    image: muttonBriyani,
    description: "Fragrant basmati rice with juicy mutton pieces.",
    category: "Mutton",
  },
  {
    id: 8,
    name: "Mutton Curry",
    cost: "$7.40",
    image: muttonCurry,
    description: "Slow-cooked mutton in spicy red curry.",
    category: "Mutton",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "With Bone", price: 0, cover: muttonBone },
          { name: "Boneless", price: 1, cover: muttonBoneless },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Masala", price: 1, cover: muttonBone },
          { name: "Potato Pieces", price: 2, cover: fries },
        ],
      },
    ],
  },

  // 🥩 Beef
  {
    id: 9,
    name: "Beef Ularthiyathu",
    cost: "$6.25",
    image: beef,
    description: "Kerala-style beef fry with coconut slivers.",
    category: "Beef",
  },
  {
    id: 10,
    name: "Beef Meal Combo",
    cost: "$7.25",
    image: beefMeal,
    description: "Beef curry, rice, papad, and vegetable sides.",
    category: "Beef",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Rice + Coke + Beef Curry", price: 0, cover: beefCoke },
          {
            name: "Rice + Chukka + Curry",
            price: 2,
            cover: beefCurry,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Pepper Beef Roast",
    cost: "$6.75",
    image: beefRoast,
    description: "Spicy beef roast seasoned with black pepper.",
    category: "Beef",
  },
  {
    id: 12,
    name: "Beef Curry",
    cost: "$6.55",
    image: beefGravy,
    description: "Beef simmered in onion-tomato masala.",
    category: "Beef",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Thick Gravy", price: 0, cover: beefThick },
          { name: "Thin Gravy", price: 1, cover: beefThin },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Meat", price: 2, cover: beefMeat },
          { name: "Add Liver", price: 1.5, cover: beefLiver },
        ],
      },
    ],
  },

  // 🍛 Briyani
  {
    id: 13,
    name: "Hyderabadi Chicken Biryani",
    cost: "$5.50",
    image: briyani,
    description: "Spiced chicken layered with saffron basmati rice.",
    category: "Briyani",
  },
  {
    id: 14,
    name: "Beef Biryani Combo",
    cost: "$6.90",
    image: beefBriyani,
    description: "Beef biryani with raita, boiled egg, and dessert.",
    category: "Briyani",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Rice + Coke + Beef Curry", price: 0, cover: beefCoke },
          {
            name: "Rice + Chukka + Curry",
            price: 1,
            cover: beefCurry,
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Egg Biryani",
    cost: "$4.80",
    image: eggBriyani,
    description: "Fragrant rice with boiled eggs and fried onions.",
    category: "Briyani",
  },
  {
    id: 16,
    name: "Mutton Biryani",
    cost: "$6.25",
    image: muttonBriyanii,
    description: "Rich and spicy biryani with tender mutton chunks.",
    category: "Briyani",
    type: "Modifier",
    modifiers: [
      {
        name: "Choose your Type",
        options: [
          { name: "Dum", price: 0, cover: dumBriyani },
          { name: "Seeraga Samba", price: 1, cover: seeragaBriyani },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Boiled Egg", price: 1, cover: egg },
          { name: "Brinjal Curry", price: 1.5, cover: brinjal },
        ],
      },
    ],
  },

  // 🍹 Drinks
  {
    id: 17,
    name: "Mint Mojito",
    cost: "$2.20",
    image: mintMojito,
    description: "Refreshing drink with mint, lime, and soda.",
    category: "Drinks",
  },
  {
    id: 18,
    name: "Fruit Punch Combo",
    cost: "$3.60",
    image: friutPuch,
    description: "Fruit punch served with a mini snack platter.",
    category: "Drinks",
    type: "Combo",
    combo: [
      {
        name: "Choose your Combo Variations",
        options: [
          { name: "Mixed Fruits", price: 1, cover: mixedFruits },
          {
            name: "Stawberry Mixed",
            price: 2,
            cover: stawberry,
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Mango Smoothie",
    cost: "$2.80",
    image: mangoSmoothie,
    description: "Creamy mango blend with a tropical twist.",
    category: "Drinks",
  },
  {
    id: 20,
    name: "Lemon Iced Tea",
    cost: "$2.50",
    image: lemonIced,
    description: "Iced tea with fresh lemon and mint.",
    category: "Drinks",
    type: "Modifier",
    modifiers: [
      {
        name: "Sweetness Level",
        options: [
          { name: "Normal", price: 0, cover: normalTea },
          { name: "Less Sugar", price: 0, cover: lessSugar },
        ],
      },
      {
        name: "Add-ons",
        options: [
          { name: "Extra Ice", price: 0.5, cover: extraIce },
          { name: "Lemon Slice", price: 0.5, cover: lemonSliced },
        ],
      },
    ],
  },

  // 🍽 Meals
  {
    id: 21,
    name: "South Indian Veg Meals",
    cost: "$4.20",
    image: vegmeals,
    description: "Rice with 4 vegetable sides, sambar, rasam and curd.",
    category: "Meals",
  },
  {
    id: 22,
    name: "Non-Veg Meals",
    cost: "$5.90",
    image: nonVeg,
    description: "Meals with chicken curry, fry, and boiled egg.",
    category: "Meals",
  },
  {
    id: 23,
    name: "Fish Curry Meals",
    cost: "$5.60",
    image: fishMeals,
    description: "Traditional fish curry served with rice and sides.",
    category: "Meals",
  },
  {
    id: 24,
    name: "Special Thali Meals",
    cost: "$5.30",
    image: thaalimeals,
    description: "Includes rice, chapati, sweet, curry, and pickle.",
    category: "Meals",
  },
];

export default productInfo;
