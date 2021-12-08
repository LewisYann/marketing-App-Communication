import React,{useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
 import axios from "axios"
 import {Alert, Button} from 'react-bootstrap'
 
 const FormControl = () => {
  const [number, setNumber]=useState("")
  const [message, setMessage]=useState("")
  const [show, setShow] = useState(false);
  const [showFailed, setShowF] = useState(false);

 
  function onsubmitform(e){
    e.preventDefault()
    console.log(number)
    console.log(message)
    axios.post("https://bip-me.herokuapp.com/messages/new", 
                                                            {
                                                              from:"+1(772)3031191",
                                                              to: number,
                                                              body:message

                                                            }
                                                            ).then(()=>{
                                                              console.log('successful')
                                                              setShow(true)
}
                                                              
                                                              ).catch(
                                                                ()=>{
                                                                  console.log('Failed')
                                                                  setShowF(true)
    }
                                                                
                                                                )


  }

  function AlertDismissible() {
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Your message is sending</Alert.Heading>
          <p>
          Please wait few second to received it !
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
             Close
            </Button>
          </div>
        </Alert>
        </>
    );
  }
  function AlertDismissibleF() {
  
    return (
      <>
        <Alert show={showFailed} variant="danger">
          <Alert.Heading>Failed</Alert.Heading>
          <p>
         Check your number phone
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowF(false)} variant="outline-danger">
             Close
            </Button>
          </div>
        </Alert>
        </>
    );
  }


  return (
    <CRow>
        
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <AlertDismissible/>
            <AlertDismissibleF />
            <strong>Sms Form</strong>
          </CCardHeader>
          <CCardBody>
               <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Number Phone</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="+1(855)....."
                    onChange={(e)=>setNumber(e.target.value)}
                    value={number}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Message to sends</CFormLabel>
                  <CFormTextarea 
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                  id="exampleFormControlTextarea1" rows="3">
                  </CFormTextarea>
                  <br/>
                  <button
                    onClick={(e)=>onsubmitform(e)}
                    className="btn btn-primary"
                  >
                    Send message
                  </button>
                </div>
              
              </CForm>
           </CCardBody>
        </CCard>
      </CCol>
     </CRow>
  )
}

export default FormControl
