import { useState } from "react";
import "./Input.css";

export default function Input({ people }: { people: number }){

      const [value, setPeople] = useState(people);

      return (
            <p>
                  People:
                  <input value={value} onChange={(e) => setPeople(Number(e.target.value))}></input>
                  <p>2 * {value} = {2 * value}</p>
            </p>
            )
}