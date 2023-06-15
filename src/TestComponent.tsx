import CounterComponent from "./CounterComponent"

function TestComponent({name, age} : {name: string, age:number}) {
    return (
        <>
            <div>
                <h1>My name is {name}.</h1>
                <p>I'm {age} years old.</p>
            </div>
            <div>
                <CounterComponent 
                age = {age}
                />
            </div>
        </>
    )
}

export default TestComponent