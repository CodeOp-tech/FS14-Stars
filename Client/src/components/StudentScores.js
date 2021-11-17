import React, { useEffect, useState } from 'react';
import Api from './../helpers/Api';


// Requires: userId
function StudentScores(props) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        getScores(props.userId);
    }, []);

    // Make all exercise info available in the corresponding score
    // Also reverse the dates to be dd-mm-yyyy format
    function mergeThem(exercises, scores) {
        for (let i=0; i<scores.length; i++) {
            scores[i].exercise = exercises.find(e => e.id === scores[i].exerciseID);

            let [ d, t ] = scores[i].date_time.split(' ');
            d = d.split('-').reverse().join('.');
            scores[i].date_time = d + ' ' + t;
        }

        return scores;
    }

    async function getScores(userId) {
        let response = await Api.getScores(userId);
        if (response.ok) {
            let { exercises, scores } = response.data;
            scores = mergeThem(exercises, scores);
            setScores(scores);
        } else {
            console.log('StudentScores getScores:', response.error);
        }
    }

    return <div className="StudentScores">
        <h2>Exercise Scores for (fix this)</h2>

        <table className="table table-sm text-start">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Level</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {
                scores.length && scores.map(s => (
                    <tr key={s.id}>
                        <td>{s.date_time}</td>
                        <td>{s.exercise.title}</td>
                        <td>{s.exercise.category}</td>
                        <td>{s.exercise.level}</td>
                        <td>{s.score}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
}

export default StudentScores;