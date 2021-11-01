const Down = ({ judge, count }) => {

    return (
        <>
            {judge.map(() => (
                <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total" id="total">
                    {count} left
                </div>
                <ul className="todo-app__view-buttons">
                    <button id="allbtn">All</button>
                    <button id="activebtn">Active</button>
                    <button id="completedbtn">Completed</button>
                </ul>
                <div className="todo-app__clean" id="clean">
                    <button id="clearbtn">Clear completed</button>
                </div>
            </footer>
            ))}
        </>
    )

}

export default Down