import React from 'react'
import Card from './Card'

const GridCard = () => {

    const myTestC = [{
        title: 'Herbert Hansson',
        firstName: 'Herbert',
        lastName: 'Hansson',
        emailCustomer: 'herbert@herbert.her',
    },
    {
        title: 'Freddie Ersson',
        firstName: 'Freddie',
        lastName: 'Ersson',
        emailCustomer: 'Freddie@earshow.eh',
    },
    {
        title: 'Bosse Ersson',
        firstName: 'Bosse',
        lastName: 'Ersson',
        emailCustomer: 'Bosse@earshow.eh',
    }]
    

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <Card image="https://static.thousandwonders.net/%C5%A0ar.Mountains.640.39559.jpg" title={myTestC[0].title} firstName={myTestC[0].firstName} lastName={myTestC[0].lastName} emailCustomer={myTestC[0].emailCustomer} />
            </div>
            <div className="col">
                <Card image="https://static.thousandwonders.net/%C5%A0ar.Mountains.640.39559.jpg" title={myTestC[1].title} firstName={myTestC[1].firstName} lastName={myTestC[1].lastName} emailCustomer={myTestC[1].emailCustomer}/>
            </div>
            <div className="col">
                <Card image="https://static.thousandwonders.net/%C5%A0ar.Mountains.640.39559.jpg" title={myTestC[2].title} firstName={myTestC[2].firstName} lastName={myTestC[2].lastName} emailCustomer={myTestC[2].emailCustomer}/>
            </div>
        </div>
    )
}

export default GridCard
