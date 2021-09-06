import styles from './TimeRemaining.module.scss'
import React from 'react'

class TimeRemaining extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }


    componentDidMount() {
        let goalDate = sessionStorage.getItem('goalDate')
        if (goalDate) {
            this.calculateTime(goalDate)
        } else {
            this.calculateTime(new Date())
        }
        this.interval = setInterval(() => { this.calculateTime(goalDate) }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    calculateTime = (goalDate) => {
        if (!goalDate) return undefined
        let currentDate = new Date()
        let fullGoalDate = new Date(goalDate)
        const totalSeconds = (fullGoalDate - currentDate) / 1000
        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600) % 24
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds) % 60

        this.setState({
            days,
            hours,
            minutes,
            seconds,
        })

        return totalSeconds;
    }

    render() {
        return (
            <div className={styles.timeRemainingContainer}>
                <div className={styles.dayContainer}>
                    {this.state.days ? <p className={styles.bigText}>00</p>
                        : <p className={styles.bigText}>{this.state.days < 10 ? `0${this.state.days}` : this.state.days}</p>
                    }
                    <p className={styles.smallText}>days</p>
                </div>

                <div className={styles.hourContainer}>
                    <p className={styles.bigText}>{this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours}</p>
                    <p className={styles.smallText}>hours</p>
                </div>

                <div className={styles.minuteContainer}>
                    <p className={styles.bigText}>{this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}</p>
                    <p className={styles.smallText}>minutes</p>
                </div>

                <div className={styles.secondContainer}>
                    <p className={styles.bigText}>{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</p>
                    <p className={styles.smallText}>seconds</p>
                </div>
            </div>
        )
    }
}

export default TimeRemaining;