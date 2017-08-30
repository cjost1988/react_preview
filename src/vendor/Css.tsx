interface CssClassHelperClasses {
    [className: string]: boolean
}

/**
 * Class Helper
 */
class Css
{
    /**
     * Generates a class string depending on class conditions and static class string
     *
     * @param {CssClassHelperClasses} classes
     * @param {string} staticClasses
     * @returns {string}
     */
    static classes(classes: CssClassHelperClasses, staticClasses: string = ''): string
    {
        let list: Array<string> = staticClasses.split(' ');

        for(let key in classes) {
            if (classes[key]) {
                list.push(key);
            }
        }

        return list.filter((entry: string) => entry !== '').join(' ');
    }
}

export default Css;
