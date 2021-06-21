import React from "react";
import "./ListOfUsers.css"
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function ListOfUsers() {
    const { data } = useQuery(GET_ALL_USERS);
    console.log(data)

    const [deleteUser, { error }] = useMutation(DELETE_USER);

    return (
        <div>
            <h2 className="container mt-5 mb-5">List OF Registerd Users</h2>
            {data &&
                data.getAllUsers.map((user: any) => {
                    return (
                        <div className="container">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td><button className="btn btn-danger btn-sm"
                                            onClick={() => {
                                                deleteUser({ variables: { id: user.id } });
                                            }}
                                        >
                                            Delete User
                                        </button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    );
                })}
        </div>
    );
}

export default ListOfUsers;