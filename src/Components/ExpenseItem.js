import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
    console.log(props);
    
    return (
        <div className='expense-item'>
            <ExpenseDate  date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
                <div className='expense-item-Location'>{props.LocationOfExpenditure}</div>
                
            </div>
        </div>
    );
}

export default ExpenseItem;