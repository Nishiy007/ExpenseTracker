import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate=new Date(2021, 2, 28);
    const ExpenseTitle='Car Insurance';
    const expenseAmount=294.67;
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div classNme='expense-item__description'>
                <h2>{ExpenseTitle}</h2>
                <div className='expense-item-price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;