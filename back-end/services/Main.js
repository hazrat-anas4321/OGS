import bcrypt from 'bcrypt'
const decryptPassword = (password) => {
    return new Promise((res, rej) => {
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
                rej(err)
            }
            else
                res(hash)
        });
    })
}
export { decryptPassword }

// const decryptPassword = (password) => {
//     return new Promise((res, rej) => {
//         bcrypt.hash(password, 10, function (err, hash) {
//             if (err) {
//                 rej(err)
//             }
//             else
//                 res(hash)
//         });
//     })
// }