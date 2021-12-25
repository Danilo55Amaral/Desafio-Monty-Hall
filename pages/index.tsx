import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtdeDoors, setQtdeDoors] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#9C27B0">
          <h1>Monty Hall</h1>
        </Card>
        <Card bgcolor="black">
          <NumberInput text="Quantidade de Portas?"
            value={qtdeDoors}
            onChange={newQtde => setQtdeDoors(newQtde)} />
        </Card>
      </div>
      <div>
        <Card bgcolor="black"> 
          <NumberInput text="Porta com presente?"
            value={withGift}
            onChange={newDoorWithGift => setWithGift(newDoorWithGift)} />
        </Card>
        <Card bgcolor="#9C27B0">
          <Link href={`/game/${qtdeDoors}/${withGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
};
