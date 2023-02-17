import React, {useState} from 'react'; 
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;
import ErrorModal from '../UI/ErrorModal' ;

const AddUser = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [errorModal, setErrorModal] = useState(null);

    function nameChangeHandler(event){
        setEnteredName(event.target.value) ;
        
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value) ;
        console.log(enteredAge) ;
    }

    function addUserHandler(event){
        event.preventDefault();

        if (+enteredAge < 1){
            setErrorModal({
                title:"Błędnie podany wiek",
                msg:"Wiek musi być > 0"
            })
        }
        setEnteredName('');
        setEnteredAge('');
    }

    function errorHandler(event){
        setErrorModal(null)
    }

    return(
        <>
        {errorModal && <ErrorModal 
                        title={errorModal.title} 
                        msg={errorModal.msg} 
                        onConfirm={errorHandler}
                        /> }
    <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"> UserName</label>
            <input  id="username" 
                    type="text" 
                    onChange={nameChangeHandler}
                    value={enteredName}
                    />

            <label htmlFor="age"> Age (years) </label>
            <input id="age" type="Number"
                    onChange={ageChangeHandler}
                    value={enteredAge}
            />

            <Button type="submit"> Add PrincePolo</Button>
        </form>
    </Card>
    </>
    );
}

export default AddUser;
