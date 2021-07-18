import React, { Component } from 'react';

class TableBody extends Component {
    constructor(props) {
    super(props);
}

handleClick = (i) => {
    this.props.removePerson(i);
}

render() {
    const {data} = this.props; // data = this.props.data;
    const rows = data.map((row, index) =>
    <tr key={index}>
    <td>{row.name}</td>
    <td>{row.job}</td>
    <td>{row.age}</td>
    <td>
        <button onClick={() => this.handleClick(index)}>Delete</button>
    </td>
    </tr>
)

return (
    <tbody>{rows}</tbody>
    );
}

}

export default TableBody;


