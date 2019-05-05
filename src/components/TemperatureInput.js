import React from 'react'

const scaleNames = {c: 'Celsius',
                    f: 'Fahrenheit'}

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Please input temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}></input>
            </fieldset>
        )
    }

}