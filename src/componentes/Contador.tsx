import React, {Component} from "react";
import ContadorValor from "./ContadorValor";
import ContadorValorProps from './ContadorValor';
import logRender from '../decorators/LogRender';


interface IContadorProps{
    valorInicial?: number
}

interface IContadorState{
    valor: number
}
@logRender
export default class Contador extends Component <IContadorProps, IContadorState>{
    public state = {valor: this.props.valorInicial || 0}

    private setValue = (delta:number)=>
    {
        this.setState({
            valor:this.state.valor +delta
        })
    }
    render(){
        return (
            <div>
                 <ContadorValor contador={this.state.valor} />
                 <button onClick={() =>this.setValue(1)}>+</button>
                 <button onClick={() =>this.setValue(-1)}>-</button>
            </div>
           
        )
    }
}
