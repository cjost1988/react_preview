import * as React from "react";
import {IProduct, default as Product} from "./Product";

interface IProductListState
{
    products: Array<IProduct>;
    input: string;
}

export default class ProductList extends React.Component<any, IProductListState>
{
    constructor(props: any) {
        super();
        this.state = {input: '', products: []};

        this.inputChanged = this.inputChanged.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({input: event.currentTarget.value});
    }

    addProduct(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.setState((prevState: IProductListState): IProductListState => {
            let products = prevState.products;
            products.push({id: prevState.products.length + 1, title: prevState.input});

            return {
                products: products,
                input: ''
            }
        });
    }

    removeProduct(id: number) {
        console.log('try to remove ' + id);
    }

    render(): JSX.Element {
        const products = this.state.products.map((product: IProduct) => <Product
            key={product.id}
            product={product}
            removeProductCallback={this.removeProduct}/>
        );

        return (
            <div className="product-list">
                <form onSubmit={this.addProduct}>
                    <input type="text" value={this.state.input} onChange={this.inputChanged}/>
                </form>
                <ul>
                    {products}
                </ul>
            </div>
        );
    }
}
