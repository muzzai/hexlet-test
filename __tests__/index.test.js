import  reverse  from '../src/';

test('reverse', () => {
    expect(reverse('Hello')).toEqual('olleH');
    expect(reverse('')).toEqual('');
});