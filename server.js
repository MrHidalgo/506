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


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});