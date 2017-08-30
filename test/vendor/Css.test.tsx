import Css from "../../src/vendor/Css";

describe('Css class', () => {
    test('No conditions, no default', () => {
        expect(Css.classes({})).toBe('');
    });
});
