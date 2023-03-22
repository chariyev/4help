'use strict';
exports.checkMobilePhoneNumber = (tel) => {
    return tel.match(/[+]*9936[0-5]\d{1,6}$/gm);
};

exports.formatMobilePhoneNumber = (tel) => {
    tel = tel.replace(' ', '');
    // Pryamoy nomerlar.
    // if (tel.length === 6) {
    //     return `+99365${tel}`;
    // }

    // 8 lik bilen yazsa Mysal ucin: 863384289 -> +99363384289
    if (tel.match(/^86[0-5]\d{1,6}$/gm)) {
        const makeTel = `+993${tel.split('').splice(1).join('')}`;
        return makeTel.match(/[+]*9936[0-5]\d{1,6}$/gm) ? makeTel : tel;
    }

    // 63354512 - > +99363354512
    if (tel.match(/^6[0-5]\d{1,6}$/gm) && tel.length === 8) {
        const makeTel = `+993${tel}`;
        return makeTel.match(/[+]*9936[0-5]\d{1,6}$/gm) ? makeTel : tel;
    }

    // + syz yazsa Mysal ucin: 99363384289 -> +99363384289

    if (tel.match(/^9936[0-5]\d{1,6}$/gm)) {
        const makeTel = `+${tel}`;
        return makeTel.match(/[+]*9936[0-5]\d{1,6}$/gm) ? makeTel : tel;
    }
    return tel;
};
