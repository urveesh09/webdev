import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section 
      title="Model S"
      description="Order Online for Touchless Delivery"
      backgroundImg="/images/model-s.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      
      <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      backgroundImg="/images/model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      description="Star of the Year"
      backgroundImg="/images/model-y.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model 3"
      description="The Sole Gift for total Happiness"
      backgroundImg="/images/model-3.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Lowest Cost Solar Panels"
      description="Worth Your Money"
      backgroundImg="/images/solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
      <Section
      title="Lowest Cost Solar Roofs"
      description="Worth Your Money"
      backgroundImg="/images/solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
      <Section
      title="Premium Accessories"
      description="Your Premium Little Companoins"
      backgroundImg="/images/accessories.jpg"
      leftBtnText="Order Now"
      />
    </Container>
  )
}

export default Home

const Container =styled.div`
height:100vh;

`
