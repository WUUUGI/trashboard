import { useState, useEffect } from 'react'

export function Clock({ children }) {
    const init = new Date()
    const [date, setDate] = useState(init)

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000)
        return () => {
            clearInterval(timerID)
        }
    }, [])

    return (<>
        <div className="text-slate-200 text-lg my-6 mx-6">
            <div>
                🕐 {date.toLocaleTimeString()}
            </div>
        </div>
    </>)
}