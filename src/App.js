import React,{Component} from 'react';
import JSONPretty from 'react-json-pretty';

//heroku create $APP_NAME --buildpack mars/create-react-app    



class App extends Component{  

  state={apiresponse:"",url:""};
  callAPI=(url)=>{
    fetch("https://nodeextract2.herokuapp.com/extract?url="+url)
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
        <a target="_blank" href="https://nodeextract2.herokuapp.com/extract?url=https://flipkart.com"><h4 >Download File</h4></a>
        <JSONPretty id="json-pretty" data={this.state.apiresponse}></JSONPretty>
        </form>
      </div>
    );
  }
}

export default App;
