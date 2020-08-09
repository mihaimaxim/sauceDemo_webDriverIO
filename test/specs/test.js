let Page = require('../pageobjects/page');

describe('test site', () => {
   it('should access address and maximize', () => {
      Page.prototype.open();
   });

   it('should type in credentials', () => {
      browser.pause(1000); // script will pause for 1 second
      let userInput = $('#user-name');
      userInput.addValue('standard_user');
      browser.pause(1000);

      // userInput.clearValue();
      // browser.pause(1000);
      // userInput.addValue('standard_user');
      // browser.pause(1000);

      let passInput = $('#password');
      passInput.addValue('secret_sauce');
      browser.pause(1000);
   });

   it('should login', () => {
      let login = $('#login-button');
      login.click();
      // browser.debug(); // whenever this method is called for, reach the terminal and press ctrl + c twice to continue
   });

   it('should order list by price (low to high)', () => {
      browser.pause(1000);
      let orderDropdown = $('.product_sort_container');
      orderDropdown.click();
      browser.pause(1000);

      let byPrice = $('[value="lohi"]');
      byPrice.click();
      browser.pause(1000);

      orderDropdown.click();
      browser.pause(1000);
   });

   it('should check out the first item', () => {
      let firstItem = $('div.inventory_item:nth-child(1)')
         .$('div.inventory_item_label')
         .$('div.inventory_item_name');
      firstItem.click();
      // browser.debug();
   });

   // it('should output the tab title', () => {
   //    browser.getTitle();
   //    browser.debug();
   // });

   it('should check out the whole page', () => {
      browser.pause(1000);
      let page = $('div.inventory_details_container');
      page.scrollIntoView({ behavior: 'smooth', block: 'end' });
      browser.pause(1000);
      let pageHeader = $('#header_container');
      pageHeader.scrollIntoView({ behavior: 'smooth' });
      browser.pause(1000);
   });

   it('should return to homepage', () => {
      // let backButton = $('button.inventory_details_back_button');
      // backButton.click();
      browser.execute(() => {
         window.history.back();
      });
      // browser.debug();
   });

   it('should order list by price (low to high)', () => {
      browser.pause(1000);
      let orderDropdown = $('.product_sort_container');
      orderDropdown.click();
      browser.pause(1000);

      let byHighPrice = $('[value="hilo"]');
      byHighPrice.click();
      browser.pause(1000);

      let byLowPrice = $('[value="lohi"]');
      byLowPrice.click();
      browser.pause(1000);

      orderDropdown.click();
   });

   it('should inspect the last row of products', () => {
      browser.pause(1000);
      let thirdRow = $('div.inventory_item:last-of-type');
      thirdRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // browser.debug();
   });

   it("should see the most expensive product's details", () => {
      browser.pause(1000);
      let mostExpPro = $('div.inventory_item:nth-child(6)')
         .$('div.inventory_item_label')
         .$('div.inventory_item_name');
      mostExpPro.click();
      // browser.debug();
   });

   it('should add product to cart', () => {
      browser.pause(1000);
      let addToCart = $('button.btn_primary*=ADD');
      addToCart.click();
      // browser.debug();
   });

   it('should check the cart', () => {
      browser.pause(1000);
      let cart = $('div#shopping_cart_container').$('a.shopping_cart_link');
      cart.click();
      // browser.debug();
   });

   it('should go for 3 jackets', () => {
      browser.pause(1000);
      let cartQuant = $('div.cart_quantity');
      browser.execute((element) => {
         element.innerText = '3';
      }, cartQuant);

      let price = $('div.inventory_item_price');
      browser.execute((element) => {
         element.innerText = 149.99;
      }, price);
      // browser.debug();
   });

   it('should checkout', () => {
      browser.pause(1000);

      let checkout = $('div.cart_footer').$('a.btn_action');
      checkout.click();
      // browser.debug();
   });

   it('should fill out info', () => {
      browser.pause(1000);

      let firstNameInput = $('#first-name');
      const firstName = 'Mihai';
      firstNameInput.addValue(firstName);
      browser.pause(1000);

      let lastNameInput = $('#last-name');
      const lastName = 'Maxim';
      lastNameInput.addValue(lastName);
      browser.pause(1000);

      let postalCodeInput = $('#postal-code');
      let postalCode = 290390;
      postalCodeInput.addValue(postalCode);
      // browser.debug();
   });

   it('should continue', () => {
      browser.pause(1000);

      let continueButton = $('div.checkout_buttons').$('input');
      continueButton.click();
      // browser.debug();
   });

   it('should finish transaction', () => {
      browser.pause(1000);

      let finishButton = $('div.cart_footer').$('a.btn_action');
      finishButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(1000);
      finishButton.click();
      // browser.debug();
   });

   it('should head back to homepage', () => {
      browser.pause(1000);

      let burgerButton = $('div.bm-burger-button');
      burgerButton.click();
      browser.pause(1000);
      let homepage = $('#inventory_sidebar_link');
      homepage.waitForExist({ timeout: 3000 });
      homepage.click();
      browser.debug();
   });
});
