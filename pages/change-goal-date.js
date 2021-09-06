import React from 'react'
import Calendar from 'react-calendar'
import styles from '../styles/GoalDate.module.scss'

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

        this.setState({
            goalDate: value.toLocaleDateString('en-US')
        })
    }

    changeDate = e => {
        e.preventDefault()

        if (this.state.goalDate) localStorage.setItem('goalDate', this.state.goalDate)
    }

    render() {
        return (
            <div>
                <h1>Change goal date</h1>

                <div className={styles.dateInputContainer}>
                    <input type="text" className={styles.dateInput} value={this.state.goalDate} />
                    <button className={styles.changeDateBtn} onClick={this.changeDate}>Change Date</button>
                    <div>
                        <button onClick={this.onClick} className={styles.calendarBtn}>Calendar</button>
                        <Calendar
                            className={`${styles.calendarContainer} ${this.state.calendarVisible ? styles.visible : styles.hidden}`}
                            // className={styles.calendarContainer, this.state.calendarVisible ? styles.visible : styles.hidden}
                            onChange={this.onChange}
                            value={new Date()}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default ChangeGoalDate