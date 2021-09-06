import styles from './TimeRemaining.module.scss'
import React from 'react'

class TimeRemaining extends React.Component {
    constructor() {
        super()

        this.state = {
            goalDate: new Date('1 Jan 2022')
        }
    }

    componentDidMount() {
        this.calculateTime()
        this.interval = setInterval(this.calculateTime, 1000)
        this.getGoalDate()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    calculateTime = () => {
        let goalDate = this.state.goalDate;
        let currentDate = new Date()
        const totalSeconds = (goalDate - currentDate) / 1000
        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600) % 24
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds) % 60

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }



    getGoalDate = () => {
        let goalDate = localStorage.getItem('goalDate') || '1 Jan 2022'

        this.setState({
            goalDate: new Date(goalDate)
        })
    }

    render() {
        return (
            <div className={styles.timeRemainingContainer}>
                <div className={styles.dayContainer}>
                    <p className={styles.bigText}>{this.state.days < 10 ? `0${this.state.days}` : this.state.days}</p>
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