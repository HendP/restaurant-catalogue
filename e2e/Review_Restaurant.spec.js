Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add one review restaurant', async ({ I }) => {
  I.seeElement('.restaurants');

  const firstRestaurant = locate('.restaurant-name').first();
  I.click(firstRestaurant);

  I.seeElement('.form-review');

  I.fillField('name', 'John Doe');
  I.fillField('review', 'Mantap Djiwa');
  I.click('Submit');

  I.waitForText('Review has been submit!', '.notyf-announcer');
});

Scenario('add one review restaurant but without input', async ({ I }) => {
  I.seeElement('.restaurants');

  const firstRestaurant = locate('.restaurant-name').first();
  I.click(firstRestaurant);

  I.seeElement('.form-review');

  I.click('Submit');

  I.waitForText('Name cannot be empty!', '.notyf-announcer');
});

Scenario('add one review restaurant but without review', async ({ I }) => {
  I.seeElement('.restaurants');

  const firstRestaurant = locate('.restaurant-name').first();
  I.click(firstRestaurant);

  I.seeElement('.form-review');

  I.fillField('name', 'John Doe');
  I.click('Submit');

  I.waitForText('Review cannot be empty!', '.notyf-announcer');
});
