function urlGenerator(domen) {
    return function (siteName) {
        return `https://${siteName}.${domen}`
    }
}

const uzDomen = urlGenerator('uz')

const comDomen = urlGenerator('com')

console.log(uzDomen('kun'));
console.log(comDomen('google'));

module.exports = urlGenerator;