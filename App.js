function App(){
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const display = (symbol) => {
        setExpression(prev => prev + symbol)
    };

    const calculate = () => {
        setAnswer(eval(expression));
    }

    const allClear = () => {};
    const clear = () => {};
    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input type="text" value={expression} placeholder="0" disabled/>
                </div>

                <div  onlick={allClear}className="calcButton AC red">AC</div>
                <div  onlick={clear}className="calcButton C red">C</div>
                <div  onlick={() => display ("/")}className="calcButton divide">/</div>
                <div  onlick={() => display ("*")}className="calcButton multipy">x</div>
                <div  onlick={() => display ("7")}className="calcButton seven">7</div>
                <div  onlick={() => display ("8")}className="calcButton eight">8</div>
                <div  onlick={() => display ("9")}className="calcButton nine">9</div>
                <div  onlick={() => display ("-")}className="calcButton subtract">-</div>
                <div  onlick={() => display ("4")}className="calcButton four">4</div>
                <div  onlick={() => display ("5")}className="calcButton five">5</div>
                <div  onlick={() => display ("6")}className="calcButton six">6</div>
                <div  onlick={() => display ("+")}className="calcButton add">+</div>
                <div  onlick={() => display ("1")}className="calcButton one">1</div>
                <div  onlick={() => display ("2")}className="calcButton two">2</div>
                <div  onlick={() => display ("3")}className="calcButton three">3</div>
                <div  onlick={calculate}className="calcButton equal green">=</div>
                <div  onlick={() => display ("0")}className="calcButton zero">0</div>
                <div  onlick={() => display (".")}className="calcButton dot">.</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById("root"));

/*Copyrights © https://github.com/Dramos02*/

