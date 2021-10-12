import React, { Component } from 'react'
import {Form,FormLabel,FormText,FormGroup,FormControl,Button,Col,FloatingLabel,Row} from 'react-bootstrap'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName = /^[a-zA-Z ]{2,100}$/;
const regForMobile= /^[6-9][0-9]{9}$/;
const regForFeedback = /^[a-zA-Z ]{20,200}$/;
export class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:null,
            email:null,
            password:null,
            age:null,
            mobile:null,
            confirmpassword:null,
            feedback:null,
            errors:{
                name:'',
                email:'',
                age:'',
                password:'',
                confirmpassword:'',
                mobile:'',
                feedback:''
            },
            names:[],
            emails:[],
            ages:[],
            passwords:[],
            mobiles:[],
            feedbacks:[]
            

        }
    }
    
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                
                case 'name':
                    errors.name=regForName.test(value)?'':'Name is not valid';
                    break;

                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'age':
                    errors.age=value<18?'Age is not valid':'';
                    break;
                case 'password':
                    errors.password=value.length<8?'Password must be 8 chanraters long':'';
                    break;
                case 'confirmpassword':
                    errors.confirmpassword=this.state.password!==value ?'Password dont match':'';
                                      
                    break;
                case 'mobile':
                    errors.mobile=regForMobile.test(value)?'':'Please Enter a valid mobile no';
                    break;
                case 'feedback':
                    errors.feedback=regForFeedback.test(value)?'':'Give feedback within 20-100';
                    break;
                
                    
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
            
        }
        formSubmit=(event)=>{
           event.preventDefault();
           
           if(this.validate(this.state.errors)&&(document.getElementById("name").value!=='')&&(document.getElementById("email").value!=='')&&(document.getElementById("age").value!=='')&&(document.getElementById("password").value!=='')&&(document.getElementById("confirmpassword").value!=='')&&(document.getElementById("mobile").value!==''))
           {
               alert("Form Submitted");
               var names = this.state.names;
                names.push(this.state.name);
                var emails = this.state.emails;
                emails.push(this.state.email)
                var ages = this.state.ages;
                ages.push(this.state.age)
                var passwords = this.state.passwords;
                passwords.push(this.state.password)
                var mobiles = this.state.mobiles;
                mobiles.push(this.state.mobile)
                var feedbacks=this.state.feedbacks;
                feedbacks.push(this.state.feedback)
                this.setState({
                names: names,
                name: "",
                emails: emails,
                email: "",
                ages: ages,
                age:"",
                passwords: passwords,
                password:"",
                mobiles: mobiles,
                mobile:"",
                feedbacks:feedbacks,
                feedback:""
                
                });
                document.getElementById("myForm").reset();
           }
           else {
               alert("Please Enter Valid Data");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
        
        
        
        


    render() {
        const {errors}=this.state;
        return (
            <div className="bgcolor">
                <h2> Contact Us</h2>
                <Form onSubmit={this.formSubmit} className="container-fluid" id="myForm">
                <Form.Group controlId="formBasicEmail">
                    <Col md={4}>
                    <Form.Label className="float-left">Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" id="name" onChange={this.handler}/>
                    <Form.Text className="text-muted">
                    {errors.name.length>0 && 
                    <div style={{color:'red'}}>{errors.name}</div>}<br/>
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Col md={4}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" id="email" onChange={this.handler}/>
                    <Form.Text className="text-muted">
                    {errors.email.length>0 && 
                    <div   style={{color:'red'}}>{errors.email}</div>}<br/>
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Col md={4}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" name="age" id="age" onChange={this.handler}/>
                    <Form.Text className="text-muted">
                    {errors.age.length>0 && 
                    <div style={{color:'red'}}>{errors.age}</div>}<br/>
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group>
                
                 <Col md={4}>
                <Form.Label>Gender</Form.Label>
                  <br/>
                 <Row>
                 <Col xs={1}>Male</Col>
                    <Col xs={2}>
                        <input
                        defaultValue="0"
                        style={{ width: "100%" }}
                        type="radio"
                        name="gender"
                        value="male"
                        required
                        />
                    </Col>
                    
                   
                    <Col xs={1}>Female</Col>
                    <Col xs={2}>
                        <input
                        defaultValue="1"
                        style={{ width: "100%" }}
                        type="radio"
                        name="gender"
                        value="female"
                        required
                        />
                    </Col>
                    </Row>
                    </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicEmail">
                    <Col md={4}>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Mobile" name="mobile" id="mobile" onChange={this.handler}/>
                    <Form.Text className="text-muted">
                    {errors.mobile.length>0 && 
                    <div  style={{color:'red'}}>{errors.mobile}</div>}<br/>
                    </Form.Text>
                    </Col>
                </Form.Group>
                <Col md={4}>
                <FloatingLabel controlId="floatingTextarea2" label="Feedback" >
                    <Form.Control
                    name="feedback"
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    onChange={this.handler}
                    />
                </FloatingLabel>
                {errors.feedback.length>0 && 
                    <div  style={{color:'red'}}>{errors.feedback}</div>}<br/>
                </Col>
                <Col md={4}>
                    <Button variant="primary" type="submit" onClick={this.handler.bind("Submit")}>
                    Submit
                    </Button>
                    </Col>
                   
                </Form>

           
            </div>
        )
    }
}

export default Contact
