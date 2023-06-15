import { useState } from 'react'
import styled from 'styled-components';


const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function CounterComponent({ age }: { age: number }) {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>In following year I'll be:</h1>
            <div>{age + 1 + count}</div>
            <div>
                <Button type="button" onClick={handleIncrease}>Add one year</Button>
            </div>
        </>
    )
}

export default CounterComponent