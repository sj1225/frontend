import React, { useEffect, useState } from 'react';
import axios from 'axios';

// use Hooks(useEffect, useState)
const MyPage = () => {
    // GET
    const [posts, setPosts] = useState({'results' : []});

    const [calName, setCalName] = useState("");
    const [calColor, setCalColor] = useState("red");
    const [calState, setCalState] = useState("personal");

    const [disabled, setDisabled] = useState(false);

    const handleCalNameChange = ({ target: { value } }) => setCalName(value);
    const handleCalColorChange = ({ target: { value } }) => setCalColor(value);
    const handleCalStateChange = ({ target: { value } }) => setCalState(value);

    const handleClickRadioButton = (calColor) => {
        setCalColor(calColor)
      }

    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        // POST
        
        axios({ method : "POST",
                url    : 'http://127.0.0.1:5000/insertCalendar',    // Flask 주소
                data   : {'userid' : 'put1234'
                        , 'calendar_id' : String(Date.now() * Math.floor(Math.random()*10000))
                        , 'calendar_name' : calName
                        , 'calendar_color' : calColor
                        , 'calendar_state' : 'personal'}
            }).then((res)=> {
                console.log(res);
            }).catch(error=>{
                console.log(error);
            });

        alert(`${calName} 캘린더가 정상적으로 추가되었습니다.`);
        setDisabled(false);
    };

    useEffect( () => {
        const fetchData = async() => {
            const result = await axios.get('http://127.0.0.1:5000/getCalendar');
            console.log(result.data);
            setPosts(result.data);
        };

    fetchData();
    }, []);

    // POST
        /*useEffect( () => {
        axios({ method : "POST",
                url    : 'http://127.0.0.1:5000/insertCalendar',    // Flask 주소
                data   : {'userid' : 'put1234'
                        , 'calendar_id' : String(Date.now() * Math.floor(Math.random()*10000))
                        , 'calendar_name' : 'test' + Math.floor(Math.random()*100)
                        , 'calendar_color' : 'yellow'
                        , 'calendar_state' : 'personal'}
            }).then((res)=> {
                console.log(res);
            }).catch(error=>{
                console.log(error);
            });
        }, []);*/
    
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <h1>This is MyPage Component</h1>
                <h3>캘린더명</h3>
                    {posts && posts.results.map(item => (   //&&은 axios 비동기 대기 중 오류 방지
                    <p key={item.result}>{item.result}</p>
                    ))}
                <input
                    name="calName"
                    value={calName}
                    onChange={handleCalNameChange}
                />
                
                <label htmlFor='radio'>red</label>
                <input
                    type='radio'
                    id='radioRed'
                    value = {calColor}
                    checked={calColor === 'red'}
                    onClick={() => handleClickRadioButton('red')}
                />

                <label htmlFor='radio'>blue</label>
                <input
                    type='radio'
                    id='radioBlue'
                    value = {calColor}
                    checked={calColor === 'blue'}
                    onClick={() => handleClickRadioButton('blue')}
                />

                <label htmlFor='radio'>green</label>
                <input
                    type='radio'
                    id='radioGreen'
                    value = {calColor}
                    checked={calColor === 'green'}
                    onClick={() => handleClickRadioButton('green')}
                />

                <button type="submit" disabled={disabled}>캘린더 추가</button>

            </div>
        </form>
        
    );
};

export default MyPage