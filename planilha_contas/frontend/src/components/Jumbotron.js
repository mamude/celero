import React, { Component, Fragment } from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody } from 'reactstrap';

export class Jumbotron extends Component {
	render() {
		return (
			<Fragment>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">PyBank</h1>
						<p className="lead">Como controlar seus gastos e ganhos.</p>
						<hr className="my-4" />
						<p>Aplicação de exemplo desenvolvida com Django, Django Rest Framework e React.</p>
					</div>
				</div>
				<Container>
					<Row>
						<Col>
							<CardGroup>
								<Card>									
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/python.png')} width="80" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/django.png')} width="80" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/django-rest.png')} width="150" />
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<CardGroup>
								<Card>									
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/docker.png')} width="90" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/postgresql.png')} width="90" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/vscode.png')} width="90" />
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<CardGroup>
								<Card>									
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/react.png')} width="90" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/redux.png')} width="90" />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<img className="mx-auto d-block" src={require('../img/bootstrap.png')} width="120" />
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default Jumbotron;
