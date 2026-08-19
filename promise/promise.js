// const promise = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("first")
//         resolve()
//     }, 1000);
// })

// promise.then(function () {
//     console.log("first consumed")
// })

const promise5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName:"JavaScript",password:"123"})
        }else{
            reject("Error: 1")
        }
        
    }, 1000);
})


async function handelPromise5(params){
    try {
        const res = await promise5
        console.log(res)
    } catch (error) {
        console.log("something wrong")
    }
}

handelPromise5()