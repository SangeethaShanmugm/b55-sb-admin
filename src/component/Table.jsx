import React from 'react'

function Table() {
    const data = [
        {
            name: "Tiger Nixon",
            address: "Edinburgh",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        },
        {
            name: "Garrett Winters",
            address: "Tokyo",
            salary: "$320,800"
        }
    ]
    return (
        <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.address}</td>
                                            <td>{user.salary}</td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table