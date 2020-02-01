import React from "react";
import axios from "axios";
// import data from "./CanadianAPISorryEh.js";
import InputForm from "./components/InputForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: [],
      currentCategory: "All",
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/categories")
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(err => {
        console.error("warning, error, please head to the nearest exit");
      });
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        var element = document.getElementsByClassName("list-group")[0];
        if (!input) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
        axios
          .get("http://localhost:3000/products", {
            params: {
              inputString: this.state.input,
              currentCategory: this.state.currentCategory
            }
          })
          .then(response => {
            this.setState({
              items: response.data
            });
          })
          .catch(err => {
            console.error("warning, error, please head to the nearest exit");
          });
      }
    );
  }

  handleSelect(event, eventkey) {
    this.setState({
      currentCategory: eventkey.target.innerHTML
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.input);
  }

  handleCompleteClick(event) {
    this.setState(
      {
        input: event.target.innerHTML,
        showSuggestions: false
      },
      () => {
        alert(this.state.input);
      }
    );
  }

  handleClick(event) {
    alert(this.state.input);
  }

  //post data from API to database
  // postData() {
  // for (let i = 0; i < data.length; i++) {
  //   let obj = {
  //     productId: data[i].productId,
  //     productName: data[i].productName,
  //     category_id: data[i].category_id
  //   };

  //   axios
  //     .post("http://localhost:3000/products", obj)
  //     .then(response => {
  //       console.log("The post response is:", response);
  //     })
  //     .catch(err => {
  //       console.error("post failed");
  //     });
  // }
  // }

  render() {
    return (
      <div>
        <div className="searchbar">
          <InputForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
            handleSelect={this.handleSelect}
            handleCompleteClick={this.handleCompleteClick}
            categories={this.state.categories}
            currentCategory={this.state.currentCategory}
            items={this.state.items.slice(0, 10)}
          />
        </div>
      </div>
    );
  }
}

export default App;
