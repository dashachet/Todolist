type ButtonnPropsType = {
    name: string;
    callBack:() => void;
}



export const Buttonn =(props: ButtonnPropsType)=> {

    const onClickHandler = () => {
        props.callBack() };

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>


        </div>

    )
}