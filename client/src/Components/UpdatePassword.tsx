import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    if (error) {
        return <h1> {error} </h1>;
    }
    return (
        <div className="container">
            <h2 className="mt-5">Update Password!!</h2>
            <div className="input-group mb-5 mt-5">
                <span className="input-group-text">User Name</span>
                <input type="text" aria-label="user name" className="form-control" onChange={(event) => {
                    setUsername(event.target.value);
                }} />
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">Password</span>
                <input type="password" aria-label="Current Password" className="form-control" onChange={(event) => {
                    setCurrentPassword(event.target.value);
                }} />
            </div>
            <div className="input-group mb-5">
                <span className="input-group-text">NewPassword</span>
                <input type="text" aria-label="New Password" className="form-control" onChange={(event) => {
                    setNewPassword(event.target.value);
                }} />
            </div>
            <button type="button" className="btn btn-secondary btn-md mb-5"
                onClick={() => {
                    updatePassword({
                        variables: {
                            username: username,
                            oldPassword: currentPassword,
                            newPassword: newPassword,
                        },
                    });
                }}
            >
                UPDATE PASSWORD
            </button>

        </div>
    );
}

export default UpdatePassword;