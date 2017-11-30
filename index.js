const driver = 'bob';

console.log('this code was called');

console.log(driver);


function createspy(){
const spy = sinon.spy( driver, 'is the driver variable name');
expect(spy.calledOnce).toBeTruthy();
}
