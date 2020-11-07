const { useEffect, useState } = require("react");


const Jokes = () => {
    const [joke, setJoke] = useState("");

    const fetchJokes = () => {
        fetch("http://localhost:8080/jpareststarter/api/jokes")
            .then((res) => res.json())
            .then((data) => {
                setJoke(data)
            })
    }

    useEffect(() => {
        fetchJokes()
    }, [])

    return (
        <div>
            <p>{joke.joke1}</p>
            <p>{joke.joke1Reference}</p>
            <p>{joke.joke2}</p>
            <p>{joke.joke2Reference}</p>
        </div>
    )
}

export default Jokes