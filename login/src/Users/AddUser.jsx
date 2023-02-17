import React, {useState} from 'react'; 
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = () => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    function nameChangeHandler(event){
        setEnteredName(event.target.value) ;
        
    }
    function ageChangeHandler(event){
        setEnteredAge(event.target.value) ;
        console.log(enteredAge) ;
    }

    function addUserHandler(event){
        event.preventDefault();

        console.log(enteredName, enteredAge) ;
        setEnteredName('');
        setEnteredAge('');
        
    }
    return(
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
    );
}

export default AddUser;
