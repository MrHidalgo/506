var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	11111));


// MAIN PAGE
app.use('/',            express.static('./dist/', {
        'index' : 'index.html'
}));
// CATEGORIES PAGE
app.use('/categories',            express.static('./dist/', {
        'index' : 'categories.html'
}));
// PRODUCT PAGE
app.use('/product',            express.static('./dist/', {
        'index' : 'product.html'
}));
// PACK PAGE
app.use('/pack',            express.static('./dist/', {
        'index' : 'pack.html'
}));
// CART PAGE
app.use('/cart',            express.static('./dist/', {
        'index' : 'cart.html'
}));
// TRACK MY ORDER PAGE
app.use('/track-my-order',            express.static('./dist/', {
        'index' : 'track-my-order.html'
}));
// CHECKOUT STEP 1 PAGE
app.use('/checkout_step-1',            express.static('./dist/', {
        'index' : 'checkout_step-1.html'
}));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});