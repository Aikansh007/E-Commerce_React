import React, { useState } from 'react';
import {
    ListGroup, ListGroupItem, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input, Label
} from 'reactstrap';

import { saveAddress } from '../../redux/cart/cartAction';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';







//we want to use dispatch , so simple first creating MSTP
const mapStateToProps = state => {
    return {
        userAddressInfo: state.cartReducer.addressInfo
    }
}

//using MDTP bcz we want to use action-method to save userAddress local var to state of redux store
const mapDispatchToProps = dispatch => {
    return {
        setUserAddress: (address) => dispatch(saveAddress(address))
    }
}

const AddressInfo = (props) => {
    const {addToast} = useToasts();

    const [isModalPopupOpen, togglePopup] = useState(false);
   
    //FOR VALIDATION-------
    const { register, handleSubmit, errors } = useForm();





    //-- function to handle save address
    const saveAddress = values => {


        //option2: ALETER OF option1, used for passing value to redux store.
        props.setUserAddress(values);

        
        // //eventually closing popup
        togglePopup(!isModalPopupOpen)
    }

    return (
        <>

            <ListGroup className="m-3">
                <ListGroupItem color="info"><strong>Address Details</strong>
                    {props.edit === "true" && <button className="btn btn-primary float-right"  onClick={() => togglePopup(!isModalPopupOpen)}>Change</button>}
                </ListGroupItem>
                <ListGroupItem><strong>Email Id:</strong> {props.userAddressInfo.emailId}</ListGroupItem>
                <ListGroupItem><strong>Phone Number:</strong> {props.userAddressInfo.phoneNumber}</ListGroupItem>
                <ListGroupItem><strong>Street Address:</strong> {props.userAddressInfo.streetAddress}</ListGroupItem>
                <ListGroupItem><strong>City: </strong>{props.userAddressInfo.city} </ListGroupItem>
                <ListGroupItem><strong>State:</strong> {props.userAddressInfo.state} Pincode: {props.userAddressInfo.pincode}</ListGroupItem>
                <ListGroupItem><strong>Country:</strong> {props.userAddressInfo.country}</ListGroupItem>

            </ListGroup>



        {/* -----------------Pop up------------------------ */}
            <Modal isOpen={isModalPopupOpen} toggle={() => togglePopup(!isModalPopupOpen)} >
                <ModalHeader toggle={() => togglePopup(!isModalPopupOpen)}>Address Information</ModalHeader>
                <Form onSubmit={handleSubmit(saveAddress)}> 
                <ModalBody>
                    <div className="row">
                        <div className="col-12">
                            {/* for validation : on submit call handleSubmit (yourFunction ) */}
                           
                                <FormGroup>
                                    <Label for="emailId">Email Id</Label>
                                    <Input
                                        name="emailId"
                                        placeholder="Email address"
                                        innerRef={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                              
                                            }
                                        })}
                                    />
                                    <span className="text-danger"> {errors.emailId && errors.emailId.message}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">phone number</Label>
                                    <Input
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        innerRef={register({
                                            required: "Required",
                                            maxLength:{
                                                value: 10, 
                                                message: "phone number should be of length 10 "
                                            },
                                            minLength:{
                                                value: 10, 
                                                message: "phone number should be of length 10 "
                                            }
                                        })}
                                    />
                                    <span className="text-danger"> {errors.phoneNumber && errors.phoneNumber.message}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Label >Street Address</Label>
                                    <Input 
                                    type="text" 
                                    name="streetAddress" 
                                    id="streetAddress" 
                                    placeholder="streetAddress"
                                    innerRef={register({
                                        required: "Required",
                                    })}
                                     />
                                     <span className="text-danger"> {errors.streetAddress && errors.streetAddress.message}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input 
                                    type="text" 
                                    name="city" 
                                    id="city" 
                                    placeholder="city" 
                                    innerRef={register({
                                        required: "Required",
                                    })}
                                     /> 
                                     <span className="text-danger"> {errors.city && errors.city.message}</span>

                                </FormGroup>
                                <FormGroup>
                                    <Label >State</Label>
                                    <Input 
                                    type="text" 
                                    name="state" 
                                    id="state" 
                                    placeholder="state" 
                                    innerRef={register({
                                        required: "Required",
                                    })}
                                     />
                                     <span className="text-danger"> {errors.state && errors.state.message}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Label >Pincode</Label>
                                    <Input 
                                    type="text" 
                                    name="pincode"
                                     id="pincode" 
                                     placeholder="pincode"
                                     innerRef={register({
                                        required: "Required",
                                    })}
                                     />
                                     <span className="text-danger"> {errors.pincode && errors.pincode.message}</span>

                                </FormGroup>
                                <FormGroup>
                                    <Label >Country</Label>
                                    <Input 
                                    type="text" 
                                    name="country"
                                     id="country" 
                                     placeholder="country" 
                                     innerRef={register({
                                        required: "Required",
                                    })}
                                    />
                                    <span className="text-danger"> {errors.country && errors.country.message}</span>
                                </FormGroup>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" type="submit">Save</Button>{' '}
                    <Button color="secondary" onClick={() => togglePopup(!isModalPopupOpen)}>Cancel</Button>
                </ModalFooter>
             </Form>
            </Modal>


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressInfo);