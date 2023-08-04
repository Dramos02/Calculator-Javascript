function App(){
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const display = (symbol) => {
        setExpression(prev => prev + symbol)
    };

    const calculate = () => {
        setAnswer(eval(expression));
    }

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    const clear = () => {
    setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
    setAnswer(0);
    };
    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input type="text" value={expression} placeholder="0" disabled/>
                    <div className="total">{answer}</div>
                </div>

                <div  onClick={allClear}className="calcButton AC red">AC</div>
                <div  onClick={clear}className="calcButton C red">C</div>
                <div  onClick={() => display ("/")}className="calcButton divide">/</div>
                <div  onClick={() => display ("*")}className="calcButton multipy">x</div>
                <div  onClick={() => display ("7")}className="calcButton seven">7</div>
                <div  onClick={() => display ("8")}className="calcButton eight">8</div>
                <div  onClick={() => display ("9")}className="calcButton nine">9</div>
                <div  onClick={() => display ("-")}className="calcButton subtract">-</div>
                <div  onClick={() => display ("4")}className="calcButton four">4</div>
                <div  onClick={() => display ("5")}className="calcButton five">5</div>
                <div  onClick={() => display ("6")}className="calcButton six">6</div>
                <div  onClick={() => display ("+")}className="calcButton add">+</div>
                <div  onClick={() => display ("1")}className="calcButton one">1</div>
                <div  onClick={() => display ("2")}className="calcButton two">2</div>
                <div  onClick={() => display ("3")}className="calcButton three">3</div>
                <div  onClick={calculate}className="calcButton equal green">=</div>
                <div  onClick={() => display ("0")}className="calcButton zero">0</div>
                <div  onClick={() => display (".")}className="calcButton dot">.</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById("root"));

/*Copyrights © https://github.com/Dramos02*/
