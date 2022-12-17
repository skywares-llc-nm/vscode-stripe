const stripe = require('stripe')('sk_test_51M2f6pAQSi0KThcvnl17ALeGTrGNp8qx47AIjKt214Dz4QwDa0XTKTky1ywvGjkocNYwi84BYKJCCt3l9IHQ5KaD00WjtQWu60');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your premium subscription price id: ' + price.id);
  });
});