import React from 'react'
import { Button, Card, } from 'react-bootstrap'

const Profile = () => {
    const list=[
        {name:"Rodrygo",power:"85",Img:"https://b.fssta.com/uploads/application/soccer/headshots/67951.vresize.350.350.medium.26.png"},
        
    ]
  return (
    
    <div className='card'>
 <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AC6I570l5aONa9DZ3igDlE7T50UYETBPkw378oVyow&s" />
        <Card.Body>
          <Card.Title>Rodrygo</Card.Title>
          <Card.Text>
        Power:85 
        Nationality:Brazil 
        Price:15.6M
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Limited</small>
        </Card.Footer>
      </Card>
    </div>

  )
}
export default Profile