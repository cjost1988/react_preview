import * as React from "react";
import Css from "../vendor/Css";

export interface IProduct
{
    id: number;
    title: string;
}

interface IProductProps
{
    product: IProduct;
    removeProductCallback: (id: number) => void;
}

export default class Product extends React.Component<IProductProps, "undefined">
{
    render(): JSX.Element {
        return <li className={Css.classes({highlight: this.props.product.id % 2 === 0})}>
            {this.props.product.title} (ID: {this.props.product.id})&nbsp;
            <button onClick={() => this.props.removeProductCallback(this.props.product.id)}>del</button>
        </li>
    }
}
