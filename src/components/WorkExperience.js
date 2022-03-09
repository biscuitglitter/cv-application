import React, { Component } from 'react';
import './styles/WorkExperience.css'
import uniqid from "uniqid";

export default class WorkExperience extends Component {
	constructor(props) {
		super(props);
		this.inputText1 = React.createRef()
		this.inputText2 = React.createRef()
		this.inputText3 = React.createRef()
		this.inputText4 = React.createRef()
		this.inputText5 = React.createRef()

		this.state = {
			listOfJobs: [],
			newJob: { jobTitle: "", company: "", sinceDate: "", untilDate: "", description: "", id: uniqid() },
			errors: {}
		}
	}

	handleChange = (event) => {
		this.setState(
			{
				newJob: {
					...this.state.newJob,
					id: this.state.newJob.id,
					[event.target.name]: event.target.value
				},
			},
		);
	};

	handleEdit = (id) => event => {
		const indexJob = this.state.listOfJobs.findIndex(item => item.id === id);
		const targetedJob = this.state.listOfJobs[indexJob]
		const newList = this.state.listOfJobs.filter(item => {
			return item.id !== targetedJob.id;
		})
		this.setState({
			listOfJobs: newList,
			newJob: {
				...this.state.listOfJobs[indexJob],
				id: this.state.newJob.id,
				[event.target.name]: event.target.value
			}
		},
			() => {
				this.inputText1.current.value = targetedJob.jobTitle
				this.inputText2.current.value = targetedJob.company
				this.inputText3.current.value = targetedJob.sinceDate
				this.inputText4.current.value = targetedJob.untilDate
				this.inputText5.current.value = targetedJob.description
			}
		)
	}

	onSubmitJob = (event) => {
		event.preventDefault()
		this.setState({
			listOfJobs: [
				...this.state.listOfJobs,
				this.state.newJob,
			],
			newJob: { jobTitle: "", company: "", sinceDate: "", untilDate: "", description: "", id: uniqid() }
		},
			() => {
				this.inputText1.current.value = ""
				this.inputText2.current.value = ""
				this.inputText3.current.value = ""
				this.inputText4.current.value = ""
				this.inputText5.current.value = ""
			})
	};

	handleDelete = (deletedJob, index) => event => {
		const filteredJobs = this.state.listOfJobs.filter(item => {
			return item !== deletedJob;
		});
		this.setState({
			listOfJobs: filteredJobs
		});
	};

	render = () => (
		<div className="workExp">
			<form className="form">
				<h1>Work Experience</h1>
				<label><input type="text" ref={this.inputText1} placeholder="job title" name="jobTitle" value={this.state.job} onChange={this.handleChange} /></label>
				<label><input type="text" ref={this.inputText2} placeholder="company" name="company" value={this.state.company} onChange={this.handleChange} /></label>
				<label><input type="text" ref={this.inputText3} placeholder="since" name="sinceDate" value={this.state.fromDate} onChange={this.handleChange} /></label>
				<label><input type="text" ref={this.inputText4} placeholder="until" name="untilDate" value={this.state.untilDate} onChange={this.handleChange} /></label>
				<label><input type="text" ref={this.inputText5} placeholder="description" name="description" value={this.state.description} onChange={this.handleChange} /></label>
				<button type="submit" onClick={this.onSubmitJob}> Add </button>
			</form>
			<div className="listAllJobs">
				{this.state.listOfJobs.map((item, index) => {
					return <div className="aNewJobRendered" key={item.id}>
						<div className="workExpContainer">
							<div className="topContainer">
								<div className="topLeft">
									<div className="jobTitle"> {item.jobTitle} </div>
									<div className="company"> {item.company} </div>
								</div>

								<div className="topRight">
									<div className="buttonContainer">
										<button className="closeButton" onClick={this.handleDelete(item)} key={index}> X </button>
									</div>
									<div className="datesContainer">
										<div className="sinceDate"> {item.sinceDate} </div>
										<div className="betweenDates"> - </div>
										<div className="untilDate"> {item.untilDate} </div> </div>
								</div>
							</div>
							<div className="middle">
								<div className="description"> {item.description} </div>
							</div>
						</div>
						<button className="editButton" onClick={this.handleEdit(item.id)} id={item.id}> Edit </button>
					</div>
				})}
			</div>
		</div>
	);
}




