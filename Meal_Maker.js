const menu = {
    _meal: "",
    _price: 0,
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string'){
       this._meal = mealToCheck;
      }
    },
  
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number'){
        this._price = priceToCheck;
      }
    },
  
    get todaysSpecial  () {
      if (this._meal && this._price !== '' ) {
        return 'Today\'s Special is Spaghetti for $5! '
      } else {
        'Meal or price was not set correctly!'
      }
    }
  };
  
  /*menu._meal = 0;
  menu._price = 'smth';
  console.log(menu);*/
  
  menu.meal = 'meat';
  menu.price = 43;
  console.log(menu._meal);
  console.log(menu._price);
  console.log(menu.todaysSpecial);