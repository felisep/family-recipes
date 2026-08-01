import "./Input.css";
import { useState } from "react";

export default function Input({ people, amountPeople, setPeople }: { people: number, amountPeople: any, setPeople: any}) {


      return (
            <p>
                  People:
                  <input value={amountPeople} onChange={(e) => setPeople(Number(e.target.value))}></input>
                  <p>2 * {amountPeople} = {2 * amountPeople}</p>
            </p>
            )
}