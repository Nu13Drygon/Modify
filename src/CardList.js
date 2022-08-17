import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    return (
        <div>
            {robots.map((item) => {
                return <Card name={item.name} email={item.email} key={item.id} id={item.id} />
            })}
        </div>
    )
}

export default CardList