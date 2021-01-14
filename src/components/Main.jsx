import React, { Component } from "react"
import GifContainer from "./GifContainer"

export class Main extends Component {

    constructor() {
        super()
        this.state = {
            apiKey: "0QegizgIHwqHH4870fIotwRSzqYpbmLw",
            type: "",
            gifs: []
        }
        //bindings
        this.componentDidMount = this.componentDidMount.bind(this)
        this.search = this.search.bind(this)
        this.random = this.random.bind(this)
    }

    //request trending gifs when page load
    componentDidMount() {
        const apiAddress = `https://api.giphy.com/v1/gifs/trending?api_key=${this.state.apiKey}`
        fetch(apiAddress)
        .then(res => res.json())
        .then(
            result => {
                this.setState({gifs: result.data, type: "trend"})
            },
            error => {
                console.log(error)
            }
        )
    }

    //request gifs with search term
    search(e) {
        const val = document.getElementById("input").value
        const apiAddress = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${this.state.apiKey}`
        fetch(apiAddress)
        .then(res => res.json())
        .then(
            result => {
                this.setState({gifs: result.data, type: "search"})
            },
            error => {
                console.log(error)
            }
        )

        e.preventDefault();
    }

    //request a random gif
    random() {
        const apiAddress = `https://api.giphy.com/v1/gifs/random?api_key=${this.state.apiKey}`
        fetch(apiAddress)
        .then(res => res.json())
        .then(
            result => {
                this.setState({gifs: result.data, type: "random"})
            },
            error => {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <div id="main">
                <div id="inputArea">
                    <img onClick={this.componentDidMount} src="https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg" height="40px" alt="giphy" />
                    <input id="input" type="text" name="search" placeholder="Search..." />
                    <button id="search" onClick={this.search} type="submit">Search</button>
                    <button id="random" onClick={this.random} type="submit">Random</button>
                </div>
                <div id="result">
                    <GifContainer type={this.state.type} gifs={this.state.gifs} />
                </div>
            </div>
        )
    }
}

export default Main
