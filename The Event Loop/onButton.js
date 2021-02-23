console.log('Started');

$.on('button', 'click', function onClick(){
    console.log('Clicked');
});

setTimeout(function onTimeout(){
    console.log('Timeout Finished');
}, 5000);

console.log('Done');