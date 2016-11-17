import React from 'react';
import DefaultLayout from './layouts/default';
import ContactTable from './partials/ContactTable';

class HelloMessage extends React.Component {
  render() {
      return (
          <DefaultLayout>
            <div>Hello {this.props.name}</div>
            <h2>Contacts</h2>
            <ContactTable people={this.props.people}/>
            <a href='/person/new'><button>Create New Person</button></a>
          </DefaultLayout>
      )
  }
}

export default HelloMessage;
