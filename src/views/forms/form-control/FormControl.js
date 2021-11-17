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
import { DocsCallout, DocsExample } from 'src/components'
import axios from "axios"
const FormControl = () => {
  const [number, setNumber]=useState('')
  const [message, setMessage]=useState('')
 
  function onsubmitform(){
    
   
    axios.post("https://bip-me.herokuapp.com/messages/new", 
                                                            {to:"+1(855)9053768",
                                                              from: number,
                                                              body:message

                                                            }
                                                            ).then(console.log('successful')).catch(console.log('failed'))

  }
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Form Control" href="forms/form-control" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sms Form</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Number Phone</CFormLabel>
                  <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="1(855)....."
                    onChange={(e)=>setNumber(e.target.value)}
                    value={number}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Message to send</CFormLabel>
                  <CFormTextarea 
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                  id="exampleFormControlTextarea1" rows="3">
                  </CFormTextarea>
                  <button
                    onClick={()=>onsubmitform()}
                  >
                    Send message
                  </button>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
     </CRow>
  )
}

export default FormControl
