// Componente responsável em formar a porta

import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";
import Gift from "./Gift";

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
};

export default function Door(props: DoorProps) {
    const door = props.value;
    const selectedPort = door.selectedPort && !door.open ? styles.selectedPort : '';

    const changeSelection = e => props.onChange(door.changeSelection());
    const opening = e => {
        e.stopPropagation()
        props.onChange(door.opening())
    };

    function renderDoor() {
        return (

            <div className={styles.door}>
                <div className={styles.numberDoor}>{door.number}</div>
                <div className={styles.doorhandle}
                    onClick={opening}></div>
                <div className={styles.question}>?</div>
            </div>
        )
    };

    return (
        <div className={styles.area} onClick={changeSelection}>
            <div className={`${styles.structure} ${selectedPort}`}>
                {door.closed ? renderDoor() : door.withGift ? <Gift /> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    );
};