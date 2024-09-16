import React from 'react';  
import { useQuery, useNavigate } from '@apollo/client';
import { QUERY_CHARITIES } from "../utils/queries";
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function CharityList() {

  const { loading, data } = useQuery(QUERY_CHARITIES);
  const charities = data?.charities || [];

  if (!charities.length) {
    return <h3>No Charities Found</h3>;
  }

   const navigate = useNavigate();

  return (
    <main className="py-5">
      <>
        <Container>
          <Row>
            {(charities).map((charity) => (
              <Col key={charity._id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{charity.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Category: {charity.category}
                    </Card.Subtitle>
                    <Card.Text>{charity.description}</Card.Text>
                    <div className="mb-3">
                      <strong>Amount Raised:</strong> ${charity.amountRaised} / ${charity.goalAmount}
                      <ProgressBar
                        now={(charity.amountRaised / charity.goalAmount) * 100}
                        label={`${((charity.amountRaised / charity.goalAmount) * 100).toFixed(0)}%`}
                        className="mt-2"
                      />
                    </div>
                    <Link className="btn btn-primary w-100" to={`/charities/${charity._id}`} state={charity}>Donate Here</Link>

                    {/* <a href={`/charities/${charity._id}`} className="btn btn-primary w-100">
                      Donate Here
                    </a> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        </>
      </main>
    // <div>
    //   {charities &&
    //     charities.map((charity) => (
    //       <div key={charity._id} className="card mb-3">
    //         <h4 className="card-header bg-secondary text-light p-2 m-0">
    //         <p>{charity.name}</p>
    //         <p>{charity.description}</p>
    //         <p>{charity.goalAmount}</p>
    //         <p>{charity.amountRaised}</p>
    //         <p>{charity.category}</p>
    //         {/* <button onClick={navigate("/charities/1", {state:
    //           charities
    //         })}>Donate</button> */}
    //         <Link to={`/charities/${charity._id}`} state={charity}>Donate Here</Link>
    //         </h4>
    //       </div>
    //     ))}
    // </div>
  );
}

export default CharityList;
