import React, { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function CreateUser() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER);

    return (
        <div className="createUser container">
            <h2 className="mt-5 mb-5">Register!</h2>
            <div className="input-group mb-5">
                <span className="input-group-text">Full Name</span>
                <input type="text" aria-label="name" className="form-control" onChange={(event) => {
                    setName(event.target.value);
                }} />
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">User name</span>
                <input type="text" aria-label="username" className="form-control" onChange={(event) => {
                    setUserName(event.target.value);
                }} />
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">Password</span>
                <input type="Password" aria-label="Password" className="form-control" onChange={(event) => {
                    setPassword(event.target.value);
                }} />
            </div>
            <button type="button" className="btn btn-primary btn-md mb-5 "
                onClick={() => {
                    createUser({
                        variables: {
                            name: name,
                            username: userName,
                            password: password,
                        },
                    });
                }}
            >
                Create User
            </button>
        </div>
    );
}

export default CreateUser;