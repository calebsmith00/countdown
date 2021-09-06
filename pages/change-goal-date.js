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

        console.log(value.toLocaleString('en-US'))
    }
    render() {
        return (
            <div>
                <h1>Change goal date</h1>

                <div className={styles.dateInputContainer}>
                    <input type="text" className={styles.dateInput} />
                    <div>
                        <button onClick={this.onClick}>Calendar</button>
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