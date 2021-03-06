import faker from "faker"
import react, {useEffect, useState} from "react"; 
import Story from "./Story";


function Stories() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        })
        );
        setSuggestions(suggestions);
    }, [])

    return (
        <div className="flex space-x-1 p-6 bg-white mt-8 border-gray-200  border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300">
            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories;
