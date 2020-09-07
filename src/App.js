import React,{Component} from 'react';
import JSONPretty from 'react-json-pretty';




class App extends Component{  

  state={apiresponse:"",url:""};
  callAPI=(url)=>{
    fetch("http://localhost:9000/extract?url="+url)
    .then(res => res.text())
    .then(res => this.setState({apiresponse: res}))
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    this.callAPI(this.state.url);
  }

  handleChange = (e) =>{
    this.setState({
        url:e.target.value
    })
}

  render(){
    return (
      <div className="App">
        <h1>Extract URLs</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Flipkat URLs" onChange={this.handleChange} ></input>
        <button >Extract</button>
        <JSONPretty id="json-pretty" data={this.state.apiresponse}></JSONPretty>
        </form>
      </div>
    );
  }
}

export default App;
