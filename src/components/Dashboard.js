import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Dashboard() {
    return (
      <Container className="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    );
}

export default Dashboard

// CSS Styling

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "menu work play study"
                         "menu exercise social self-care";
    grid-column-gap: 18px;
    grid-row-gap: 18px;
`
