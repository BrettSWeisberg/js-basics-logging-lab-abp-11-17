const driver = 'bob';

console.log('this code was called');

console.log(driver);


function createspy(){
const spy = sinon.spy( console.log(;driver, 'is the driver variable name'));
expect(spy.calledOnce).toBeTruthy();
}
