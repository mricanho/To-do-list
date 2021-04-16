describe('My Test', () => {
	let sut;
	let events = {};

	beforeEach(() => {
		sut = new Dependency();

		// Empty our events before each test case
		events = {};

		// Define the addEventListener method with a Jest mock function
		document.addEventListener = jest.fn((event, callback) => {
      		events[event] = callback;
    	});
	});

	test('Test Keypress fires callback', () => {
		// Watch the keypress callback
		jest.spyOn(sut, 'keypressCallback');

		// Fire the keypress event
		events.keypress({ key: 'Enter' });
	});
});