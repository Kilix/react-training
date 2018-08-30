import React from 'react';
import ReactDOM from 'react-dom';

const attendees = ['Amélie', 'Augustin', 'Hicham', 'William'];

const Attendee = ({attendee, isOdd}) => <li style={{color: isOdd ? 'blue' : 'red'}}>{attendee}</li>;
const AttendeesList = ({list}) => (
    <ul>
        {list.map((attendee, index) => (
            <Attendee attendee={attendee} isOdd={index % 2 === 1} key={index} />
        ))}
    </ul>
);
const Me = () => <div>Hey, I'm Augustin</div>;
const App = () => (
    <div>
        <Me />
        <AttendeesList list={attendees} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
