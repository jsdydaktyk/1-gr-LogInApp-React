import React, {useState} from 'react'; 
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = () => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    
    return(
    <Card className={classes.input} >
        <form>
            <label htmlFor="username"> UserName</label>
            <input id="username" type="text" />

            <label htmlFor="age"> Age (years) </label>
            <input id="age" type="Number" />

            <Button type="submit"> Add PrincePolo</Button>
        </form>
    </Card>
    );
}

export default AddUser;
