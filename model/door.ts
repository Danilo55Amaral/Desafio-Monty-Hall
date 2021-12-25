// Classe que representa os dados de uma porta

export default class DoorModel {
    #number: number
    #withGift: boolean
    #selectedPort: boolean
    #open: boolean

    constructor(number: number, withGift = false, selectedPort = false, open = false) {
        this.#number = number
        this.#withGift = withGift
        this.#selectedPort = selectedPort
        this.#open = open
    }

    get number() {
        return this.#number
    }
    get withGift() {
        return this.#withGift
    }
    get selectedPort() {
        return this.#selectedPort
    }
    get open() {
        return this.#open
    }
    get closed() {
        return !this.open
    }

    // 3 comportamentos que alteram o estado da porta
    markOff() {
        const selectedPort = false
        return new DoorModel(this.number, this.withGift, selectedPort, this.open)
    }

    changeSelection() {
        const selectedPort = !this.selectedPort
        return new DoorModel(this.number, this.#withGift, selectedPort, this.open)
    }

    opening() {
        const open = true
        return new DoorModel(this.number, this.#withGift, this.selectedPort, open)
    }
};