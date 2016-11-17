import React from 'react';
import * as db from '../../db';

let p = db.getPeople(x => p = x);


export default class ContactTable extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.people.map(x => <TableRow person={x} key={x.id}/>)}
                </tbody>
            </table>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.person.name}</td>
                <td> {this.props.person.number}</td>
            </tr>
        )
    }
}
