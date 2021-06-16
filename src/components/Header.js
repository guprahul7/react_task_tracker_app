import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title, onToggleAddTask, displayAddTask} ) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={displayAddTask ? "Grey":"Green"} text={displayAddTask ? "Close":"Add"} onClick={ onToggleAddTask }/>
        </header> 
    )
    
    /*  Inline Styling
        <h1 style={{ color:'red', backgroundColor:'black' }}>{title}</h1>
    */
}

//Default props - for default props
Header.defaultProps = {
    title: "Task Tracker" //we are using this default prop above (through destructuring)
}

Header.propTypes = {
    title: PropTypes.string.isRequired //if we wanna make the prop mandatory
}



/** DESTRUCTURING vs PASSING IN PROPS
    (Note: For class-based components, we don't need to pass in the prop keyword.
     We can get it from "this", i.e. this.props.propname1)
   
    //using props in functional component - passing in "props" keyword
    const Header = (props) => {
        <p> {props.propname1} </p>
    }

    OR...we can use destructuring for cleaner code ====#
    
    const Header = ({ propname1 }) => {
        <p> {propname1} </p>
    }
    //here we didn't use props keyword and just de-structured the props dynamically.
 */

/** STYLING
    Styling can be done inline. Note: Use double {{}} 
    Eg:
        <h1 style={{ color:'red'... }}
    
    Additionally, we can do decoupling and style dynamically, by creating+using an object.
    Eg:
        const headerStyle = {
            color:'red',
            backgroundColor:'black
        }

        <h1 style={headerStyle}  
*/

export default Header;