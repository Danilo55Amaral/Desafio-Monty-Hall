import DoorModel from "../model/door";

// função responsável em criar um array de portas
export function createDoors(qtde: number, doorWithGift: number): DoorModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const number = i + 1
        const withGift = number === doorWithGift
        return new DoorModel(number, withGift)
    })
};

// função responsavel em atualizar as portas
export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const equalToModified = currentDoor.number === modifiedDoor.number;

        if (equalToModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? currentDoor : currentDoor.markOff()
        };
    })
};