const input = 'R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1'.split(', ')

const santa = {
    go: 'y',
    x: 0,
    y: 0
}

const going = (change, num) => {
    if(change === 'R') {
        switch(santa.go) {
            case 'y':
                santa.go = 'x'
                santa.x+=num
                break
            case '-y':
                santa.go = '-x'
                santa.x-=num
                break
            case 'x':
                santa.go = '-y'
                santa.y-=num
                break
            case '-x':
                santa.go = 'y'
                santa.y+=num
                break
        }
    } else {
        switch(santa.go) {
            case 'y':
                santa.go = '-x'
                santa.x-=num
                break
            case '-y':
                santa.go = 'x'
                santa.x+=num
                break
            case 'x':
                santa.go = 'y'
                santa.y+=num
                break
            case '-x':
                santa.go = '-y'
                santa.y-=num
                break
        }
    }
}
const num = ([...letters]) => {
    letters.shift()
    return Number(letters.join(''))
}
const str = ([...letters]) => letters[0]

input.forEach(goes=>{
    const change = str(goes)
    const number = num(goes)
    going(change, number)
})

const distancia = Math.abs(santa.x) + Math.abs(santa.y)

console.log(
    distancia
)