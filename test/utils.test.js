import { renderItem } from '../render.utils.js';

const test = QUnit.test;

test('should return a li with the class of complete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li class="complete">bread</li></ul>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({
        item: 'bread',
        got: true,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should return a li with no class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li>bread</li></ul>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({
        item: 'bread',
        got: false,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
