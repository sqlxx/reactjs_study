import React from 'react'
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water is boiling</p>
    } else {
        return <p>The water will not boil</p>
    }

}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {temperature: '', scale: 'c'}
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(value) {
        this.setState({temperature: value, scale: 'c'})
    }

    handleFahrenheitChange(value) {
        this.setState({temperature: value, scale: 'f'})
    }

    render() {
        const temperature = this.state.temperature
        const scale = this.state.scale
        return (
            <fieldset>
                <TemperatureInput scale = 'c' temperature = {scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelsius)} onTemperatureChange = {this.handleCelsiusChange}></TemperatureInput>
                <TemperatureInput scale = 'f' temperature = {scale === 'f' ? temperature : this.toFahrenheit(temperature)} onTemperatureChange = {this.handleFahrenheitChange}></TemperatureInput>
                <BoilingVerdict celsius={scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelsius)}></BoilingVerdict>
            </fieldset>
        )
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 /9
    }

    toFahrenheit(celsius) {
        return (celsius * 9 /5) + 32
    }

    tryConvert(temperature, convert) {
        if (isNaN(parseFloat(temperature)) ) {
            return ''
        } else {
            const output = convert(temperature);
            const rounded = Math.round(output*1000) /1000;
            return rounded.toString()
        }
    }

}