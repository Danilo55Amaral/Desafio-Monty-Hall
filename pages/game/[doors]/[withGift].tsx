import styles from "../../../styles/Game.module.css";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { updateDoors, createDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter();
    const [validateDoors, setValidateDoors] = useState(false);
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        const doors = +router.query.doors
        const withGift = +router.query.withGift
        const qtdeDoorsValidate = doors >= 3 && doors <= 100
        const withGiftValidate = withGift >= 1 && withGift <= doors
        setValidateDoors(qtdeDoorsValidate && withGiftValidate)
    }, [doors, router.query.doors, router.query.withGift]);

    useEffect(() => {
        const doors = +router.query.doors
        const withGift = +router.query.withGift
        setDoors(createDoors(doors, withGift))
    }, [router?.query]);

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    };

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {validateDoors ?
                    renderDoors() :
                    <>
                        <h1>Failed</h1>
                        <h2>Valores inválidos</h2>
                    </>
                }
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
};