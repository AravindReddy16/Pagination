import React,{useState} from "react";
import Data from "../assets/data.js"
import "../styles/main.css";

export default function Main() {
    let count = 3
    let start = 0
    let end = 3
    let [changeIndex, setChangeIndex] = useState(0)
    let [control, setControl] = useState({
        initial: 0,
        final: 3,
    })

    function changeControl(index) {
        setControl({initial: start + count*index, final: end + count*index})
    }

    return (
        <div className="mainpage">
            <div className="header">
                <p>Pagination</p>
            </div>
            <div className="body">
                {Data.filter((value,index) => index >= control.initial && index < control.final).map((value) => (
                    <div className="page">
                        <div className="title">
                            <p>{value.title}</p>
                        </div>
                        <div className="description">
                            <p>{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer">
                {Math.ceil(Data.length/count) > 3 && <button onClick={() => setChangeIndex((prev) => prev-3 >= 0 ? prev-3 : prev)}>←</button>}
                {Array.from({length: Math.ceil(Data.length/count) < 3 ? Math.ceil(Data.length/count) : 3},(value,index) => (
                    changeIndex+index+1 <= Math.ceil(Data.length/count) && <button onClick={() => changeControl(changeIndex+index)}>{changeIndex+index+1}</button>
                ))}
                {Math.ceil(Data.length/count) > 3 && <button onClick={() => setChangeIndex((prev) => prev+3 < Math.ceil(Data.length/count) ? prev+3 : prev)}>→</button>}
            </div>
        </div>
    )
}