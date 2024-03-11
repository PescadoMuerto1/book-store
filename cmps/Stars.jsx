const { useState } = React

export function Stars({ rating, handleChange }) {
    const [hover, setHover] = useState(null)
    var stars = []
    
    for (let index = 0; index < 5; index++) {
        stars.push(<div key={index + 2}>
            <label 
                htmlFor={`star${index}`}
                className={index + 1 <= (hover || rating) ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(null)}
            >
            </label>
            <input
                type="radio"
                name="rating"
                id={`star${index}`}
                value={index + 1}
                onChange={handleChange}
            />
        </div>
        )
    }
    return stars
}