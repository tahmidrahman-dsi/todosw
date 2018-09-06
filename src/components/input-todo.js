import React from 'react';

const styles = {
    inputContainer: {
        flexDirection: 'row',
        justifyContents: 'space-between',
        paddingVertical: 10
    },
    input: {
        margin:10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 6,
        padding: 5
    }, 
    button: {
        borderRadius: 5,
        backgroundColor: 'black',
        padding: 10,
        color: 'white'
    }
};

class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        };

        this.url = 'http://localhost:3004/todos';
    }

    handleButtonClick() {
        if(this.state.title && this.state.body) {
            let data = { title: this.state.title, body: this.state.body };
            this.postData(data);
        }
        
        this.setState({title:'', body:''});
    }

    async postData(data) {
        await fetch(this.url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.props.onSuccessfulSubmission();
            response.json().then( resJSON => console.log(resJSON))
        })
    }

    render() {
        const { inputContainer, input, button } = styles;

        return (
            <div style = {inputContainer}>
                <input 
                    style = {input}
                    type="text" 
                    value = {this.state.title} 
                    onChange = {(event) => this.setState({ title: event.target.value})}
                    placeholder = "title"/>

                <input 
                    style = {input}
                    type="text"  
                    value = {this.state.body} 
                    onChange = {(event) => this.setState({ body: event.target.value})}
                    placeholder = "body"/>
                
                <button 
                    onClick = {() => this.handleButtonClick()} 
                    style = {button}>Add Todo</button>
            </div>
        );
    }
}

export default TodoInput;