import React from 'react'
import Calendar from 'react-calendar'
import styles from '../styles/GoalDate.module.scss'

class ChangeGoalDate extends React.Component {
    render() {
        return (
            <div>
                <h1>Change goal date</h1>

                <div className={styles.dateInputContainer}>
                    <input type="text" />
                    <div>
                        <button>Calendar</button>
                        <Calendar
                            className={styles.calendarContainer}
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