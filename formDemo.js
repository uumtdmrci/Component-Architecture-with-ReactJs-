import React, { Component } from "react";
import { Button, Form, FormGroup,Label,Input } from "reactstrap";
import alertify from "alertifyjs";

export default class  extends Component {
  state = { username: "", userSurname: "",description:"",city:"" };
  changeUserName = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onsubmitForm = (event) => {
 
    event.preventDefault();
   //  alert(this.state.username + " " + this.state.userSurname +  " " + this.state.description + " " + this.state.city  );
    alertify.success(this.state.username + " Added to Db.", 1.5);

  };
  render() {
    return (
      <div>
        <h3>Form Test</h3>
        <Form onSubmit={this.onsubmitForm}>
        <FormGroup>
            <Label>UserName</Label>
            <Input
                type="text"
                name="username"
                onChange={this.changeUserName}
            ></Input>
             
          </FormGroup>
        <FormGroup>
          <Label>UserSurname</Label>
          <Input
            type="text"
            name="userSurname"
            onChange={this.changeUserName}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={this.changeUserName}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
            <Input type="select" name="city" onChange={this.changeUserName}>
                <option>Istanbul</option>
                <option>Ankara</option>
                <option>Izmir</option>
            </Input>
        </FormGroup>
          {this.state.username.length > 0 && (
            <h2>
              <h3>
                Your Name:{this.state.username} <br />
              </h3>
            </h2>
          )}
          {this.state.userSurname.length > 0 && (
            <h3> Your Surname {this.state.userSurname}</h3>
          )}
          <Button type="submit">Kaydet</Button>
        </Form>
      </div>
    );
  }
}
