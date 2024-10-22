import React from 'react'
import { Row , Col} from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'



function Dashboard() {
  return (
    <div className='A'>
        <Row className=' B  border'>
            <Col sm={2}className= ' ab  border'><Sidenav/></Col>
            <Col sm={10}className=' ac border'>header</Col>
        </Row>
      <h1>Dashboard </h1>
    </div>
  )
}

export default Dashboard
