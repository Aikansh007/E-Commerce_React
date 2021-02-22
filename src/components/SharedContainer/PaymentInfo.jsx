import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        bill : state.cartReducer.billingInfo
    }
}

const PaymentInfo = (props) => {
    return (
        <div>
            <ul className="list-group m-3">
  <li className="list-group-item " style={{textAlign:"center", backgroundColor:"InfoBackground"}}><strong>Payment Details</strong></li>
  <li className="list-group-item"><strong>Total</strong>: ${Number((props.bill.Total).toFixed(1))}</li>
  <li className="list-group-item"><strong>Taxes</strong>: ${props.bill.tax}</li>
  <li className="list-group-item"><strong>Total Payable</strong>: ${props.bill.Total + props.bill.tax}</li>
 
</ul>
        </div>
    )
}
export default connect(mapStateToProps)(PaymentInfo);