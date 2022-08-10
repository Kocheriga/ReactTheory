import React, {Component} from "react";
import Car from "./Car/Car";


class App extends Component {
  state = {
    data: [
      {pname: 'for you'},
      {pname: 'for me'},
      {pname: 'for everyone'}
    ],
    pageTitle: 'React components',
    showData: false
  }
  toggleDataHandler = () =>{

    this.setState({
      showData: !this.state.showData
    })
  }

  onChangeName(name, index){
    const data = this.state.data[index]
    data.pname = name
    const dates = [...this.state.data]
    dates[index] = data
    this.setState({dates})
  }

  deleteHandler(index) {
    const data = this.state.data.concat()
    data.splice(index, 1)
    this.setState({data})
  }

  render() {
    let data = null
    if (this.state.showData) {
      data = this.state.data.map((data, index) => {
        return (
            <Car
                key={index}
                pname={data.pname}
                deleteData={this.deleteHandler.bind(this, index)}
                onChangeName={event => this.onChangeName(event.target.value, index)}
            />
        )
      })
    }
    return(
        <div style={{textAlign: 'center'}}>
          <h1>{this.state.pageTitle}</h1>
          <h1>{this.props.title}</h1>
          <button name='changButton'
                  onClick={this.toggleDataHandler}>
            Toggle data
          </button>
          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            {data}
          </div>
        </div>
    );
  }
}
export default App;

