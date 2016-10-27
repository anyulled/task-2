describe('our aplication', function() {
  it('should render the <App /> component - have a paragraph', function() {
    browser.get('http://localhost:8080/');
    element(by.css('button')).click();
    expect(element(by.css('.item')).isPresent()).not.toBeFalsy();
  });
});