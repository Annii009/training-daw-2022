function pingPong() {
    for(let i = 0; i < 100; i++){
        if (i % 5 === 0 && i % 10 !== 0)
        {
            console.log('PING')
        }
        if (i % 10 === 0){
            console.log('PONG')
        }
        if (i % 5 !== 0 && i % 10 !== 0){
            console.log(i)
        }
    }
}

pingPong()
// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG