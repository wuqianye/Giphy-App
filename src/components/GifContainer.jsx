import React, { Component } from "react"
import GifCard from "./GifCard"

export class GifContainer extends Component {
    
    //return GifCard element(s)
    appendContent() {
        const type = this.props.type
        const gifs = this.props.gifs
        let elements

        console.log(gifs)
         
        if (type === "random") {
            return <GifCard css="multiple" url={gifs.images.original.url} key={gifs.id}/>
        } else if (type === "trend" || type === "search") {
            if (gifs != "") {
                elements = gifs.map(entry => {
                    return <GifCard url={entry.images.fixed_height.url} key={entry.id}/>
                })
            } else {
                return <h1 style={{marginTop: 200}}>0 Result</h1>
            }
        }
        
        return elements
    }

    render() {
        return (
            <div id="gifContainer">
                {this.appendContent()}
            </div>
        )
    }
}

export default GifContainer
