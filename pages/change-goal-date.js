import React from 'react'
import Link from 'next/link'
import Calendar from 'react-calendar'
import styles from '../styles/GoalDate.module.scss'
import 'react-calendar/dist/Calendar.css';

class ChangeGoalDate extends React.Component {
    constructor() {
        super()

        this.state = {
            calendarVisible: false
        }
    }

    onClick = e => {
        e.preventDefault()

        this.setState({
            calendarVisible: !this.state.calendarVisible
        })
    }

    onChange = (value, event) => {
        event.preventDefault()

        let currentDate = new Date()
        if (value - currentDate < 0) return (
            value = new Date(),
            alert("You cannot select a date that's in the past!")
        )
        this.setState({
            calendarVisible: false,
            goalDate: value.toLocaleDateString('en-US')
        })

        sessionStorage.setItem('goalDate', value.toLocaleDateString('en-US'))
    }

    render() {
        return (
            <div>
                <h1>Change goal date</h1>
                <div className={styles.dateInputContainer}>
                    <Link href="/" passHref><button onClick={this.goBack}>Go Back</button></Link>
                    <button onClick={this.onClick} className={styles.calendarBtn}>Calendar</button>
                    <Calendar
                        className={`${styles.calendarContainer} ${this.state.calendarVisible ? styles.visible : styles.hidden}`}
                        onChange={this.onChange}
                        value={new Date()}
                    />
                </div>
            </div>
        )
    }

}

export default ChangeGoalDate