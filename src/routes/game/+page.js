/** @type {import('./$types').PageLoad} */
export async function load() {
    const config = {
        nightInterval: 70, // secs
        animatronics: {
            old_candy: {},
            old_cindy: {},
            chester: {},
            blank: {},
            rat: {},
            cat: {}
        }
    }

    return { config }
}