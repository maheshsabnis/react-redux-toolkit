/* eslint-disable no-useless-constructor */
import { Component } from "react"

export const wrapperComponent=(AppComponent)=>{
    return class extends Component {
        constructor(props){
            super(props);
        }
        // deleteRow(record){
        //     alert(`This row is for delete ${JSON.stringify(record)}`)
        // }
        render(){
            return(
                <AppComponent {...this.props}/>
            )
        }
    }
}
