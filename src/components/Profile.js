import React, { Component } from 'react'

const validationRules = {
  required: val => val !== null && val !== undefined && val !== "",
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.formValidationRules = {
      firstName: [
        { rule: validationRules.required, message: "First name is required" }
      ],
      lastName: [
        { rule: validationRules.required, message: "Last name is required" }
      ]
    };

    this.fields = ["Display", "firstName", "lastName"];

    this.state = {
      signupForm: { isValid: false },
      Display: { value: "", isTouched: false, isValid: false, errors: [] },
      firstName: { value: "", isTouched: false, isValid: false, errors: [] },
      lastName: { value: "", isTouched: false, isValid: false, errors: [] },
      textAreaValue: "",
      isChecked: false,
      showMenu: false 
    };
    this.handleChange = this.handleChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleFieldChange = e => {
    let newState = { ...this.state };
    newState[e.target.name].value = e.target.value;
    this.validateForm(newState);
  };

  handleSetTouched = e => {
    let field = { ...this.state[e.target.name], isTouched: true };
    this.setState({ [e.target.name]: { ...field } });
  };

  getClassName = fieldName => {
    const field = this.state[fieldName];
    return field.isTouched && !field.isValid ? "has-error" : "";
  };

  validateForm = newState => {
    newState = newState || { ...this.state };
    // this.fields.forEach(fieldName => {
    //   let newField = newState[fieldName];
    //   newField.errors = [];
    //   newField.isValid = true;
    //   this.formValidationRules[fieldName].forEach(vRule => {
    //     if (!vRule.rule(this.state[fieldName].value)) {
    //       newField.errors.push(vRule.message);
    //       newField.isValid = false;
    //     }
    //     newState[fieldName] = newField;
    //   });
    // });
    this.setState(newState);
  };

  componentWillMount() {
    this.validateForm();
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }
  
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    handleCheckboxChange(label);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  showMenu = () => this.setState({ showMenu: true  });
  hideMenu = () => this.setState({ showMenu: false });

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    const { Display, firstName, lastName } = this.state;
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <div className='profile'>
        <div className='black'>
            <div className='profile-title'>
                My Profile
            </div>
            <div className='profile-react'>
                <img src='images/react.png' alt='react' width="500" height="60"></img>
            </div>
        </div>
        <div className='profile-data'>
            <div className='profile-image'>
              <img src='images/photo.png' alt='react' width="200" height="200"></img>
            </div>
            <div className='profile-info'>
              <form onSubmit={this.formSubmit}>
                <div style={{display: "flex"}}>
                <div className="profile-display">
                  <label>Display Name</label>
                    <input
                      className={
                        Display.isTouched && !Display.isValid ? "has-error" : ""
                      }
                      name="Display"
                      value={Display.value}
                      onChange={this.handleFieldChange}
                      onBlur={this.handleSetTouched}
                    />
                  </div>
                  <div className="profile-firstname">
                  <label>First Name</label>
                  <input
                    className={
                      firstName.isTouched && !firstName.isValid ? "has-error" : ""
                    }
                    name="firstName"
                    value={firstName.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {firstName.isTouched &&
                    firstName.errors.length > 0 &&
                    firstName.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="profile-lastname">
                  <label>Last Name</label>
                  <input
                    className={
                      lastName.isTouched && !lastName.isValid ? "has-error" : ""
                    }
                    name="lastName"
                    value={this.state.lastName.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {lastName.isTouched &&
                    lastName.errors.length > 0 &&
                    lastName.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                </div>
                <div className="profile-textarea">
                  <label>About Yourself </label>
                  <textarea
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    rows={5}
                    cols={100}
                  />
                </div>
                <div className="profile-checkbox">
                  <label> Your Area of Interest</label>
                    <input
                      type="checkbox"
                      value={label}
                      checked={isChecked}
                      onChange={this.toggleCheckboxChange}
                    />
                </div>
                <div className='profile-radio'>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="Student"
                        name='role'
                        checked={this.state.selectedOption === "Student"}
                        onChange={this.onValueChange}
                        onClick = {this.hideMenu}
                      />
                      Student
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="Professional"
                        name='role'
                        checked={this.state.selectedOption === "Professional"}
                        onChange={this.onValueChange}
                        onClick = {this.showMenu}
                      />
                      Professional
                    </label>
                  </div>

{/* hide and show   */}
                { this.state.showMenu      
                  ?
                  <div>
                    <label className='text'>How much experience You have?</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="0-5"
                            checked={this.state.selectedOption === "0-5"}
                            onChange={this.onValueChange}
                          />
                          0-5
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="5-10"
                            checked={this.state.selectedOption === "5-10"}
                            onChange={this.onValueChange}
                          />
                          5-10
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="10 above"
                            checked={this.state.selectedOption === "10 above"}
                            onChange={this.onValueChange}
                          />
                          10 & above
                        </label>
                      </div>
                    <label className='text'>What is your expertise</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="JAVA"
                            checked={this.state.selectedOption === "JAVA"}
                            onChange={this.onValueChange}
                          />
                          JAVA
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="React"
                            checked={this.state.selectedOption === "React"}
                            onChange={this.onValueChange}
                          />
                          React
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            value="Backend"
                            checked={this.state.selectedOption === "Backend"}
                            onChange={this.onValueChange}
                          />
                          Backend
                        </label>
                      </div>
                  </div>
                  : null
                }
                  <div className='profile-save'>
                  <button className='button primary' type="submit">
                    Save
                  </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}
