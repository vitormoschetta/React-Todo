import React from "react";


type MyProps = {    
    message: string;
};

type MyState = {
    count: number;
};

export default class Testes extends React.Component<{ message: string }, { count: number }> {
    state: MyState = {        
        count: 0,
    };
    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}