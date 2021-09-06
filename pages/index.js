import styles from '../styles/Home.module.scss'
import React, { Suspense } from 'react'
import Link from 'next/link'
import TimeRemaining from '../components/TimeRemaining/TimeRemaining'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            headerMessages: [
                "Time passes on...",
                "It'll be here before you know it",
                "Y'know... time passes slower if you watch it"
            ]
        }
    }

    componentDidMount() {
        this.grabHeaderMessage()
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

                <TimeRemaining />
                {/* Link to goal date change page */}
                <div className={styles.changeGoalDateContainer}>
                    <Link href="/change-goal-date"><a className={styles.removeTextDecoration}>Change Goal Date</a></Link>
                </div>
            </div>
        )
    }
}

export default Home;