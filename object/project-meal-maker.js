const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
    get todaySpecial() {
      if (typeof this._meal === "string" && typeof this._price === "number") {
        return `Today’s Special is ${this._meal} for \$${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  console.log(menu);
  
  menu.meal = "Spaghetti";
  menu.price = 10;
  
  console.log(menu);
  console.log(menu.todaySpecial);
  