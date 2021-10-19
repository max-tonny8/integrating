import React from "react";

interface IContadorValorProps {
    contador: number
}

export default (props: IContadorValorProps) => <p>{props.contador}</p>