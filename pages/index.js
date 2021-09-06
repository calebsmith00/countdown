import styles from '../styles/Home.module.scss'
import React from 'react'
import Link from 'next/link'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            goalDate: new Date('1 Jan 2022'),
            headerMessages: [
                "Time passes on...",
                "It'll be here before you know it",
                "Y'know... time passes slower if you watch it"
            ]
        }
    }

    componentDidMount() {
        this.grabHeaderMessage()
        this.calculateTime()
        this.interval = setInterval(this.calculateTime, 1000)
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

    grabHeaderMessage = () => {
        let randomIndex = Math.floor(Math.random() * this.state.headerMessages.length)
        this.setState({
            currentHeader: this.state.headerMessages[randomIndex]
        })
    }

    render() {
        return (
            <div className={styles.countdownContainer}>
                {/* The current header and the goal date selected*/}
                <h1 className={styles.header}>{this.state.currentHeader}</h1>
                <p className={styles.goalDate}>{this.state.goalDate.toLocaleDateString('en-US')}</p>

                {/* Time remaining */}
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

                {/* Link to goal date change page */}
                <div className={styles.changeGoalDateContainer}>
                    <Link href="change-goal-date"><a className={styles.removeTextDecoration}>Change Goal Date</a></Link>
                </div>
            </div>
        )
    }
}

export default Home;