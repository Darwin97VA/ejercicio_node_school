const input = 'R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1'

const santa = {
    direction: 'North',
    position: {
        x: 0,
        y: 0,
    },
    move([change, steps]) {
        const factor = (change === 'R') ? 1 : -1
        switch(this.direction) {
            case 'North':
                this.direction = factor ? 'East' : 'West' 
                this.position.x += (factor * steps)
                break
            case 'South':
                this.direction = factor ? 'West' : 'East'
                this.position.x += (factor * steps)
                break
            case 'East':
                this.direction = factor ? 'South' : 'North'
                this.position.y -= (factor * steps)
                break
            case 'West':
                this.direction = factor ? 'North' : 'South'
                this.position.y += (factor * steps)
                break
        }
    },
    get distance() {
        return Math.abs(this.position.x) + Math.abs(this.position.y)
    } 
}


// Let's go!
const indications = input.split(', ')
const interpreteIndication = indication => {
    const letters = [...indication],
    change = letters.shift(),
    steps = Number(letters.join(''))
    return [change, steps]
}
indications.forEach(indication => santa.move(interpreteIndication(indication)))

console.log(santa.position, santa.distance)