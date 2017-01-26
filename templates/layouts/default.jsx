import React from 'react';
import HeaderTag from '../partials/Header';

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel='stylesheet' href='/main.css' />
                    <title> Phonebook in Rethink </title>
               </head>
                <body>
                <HeaderTag/>
                <div className="content">
                    {this.props.children}
                </div>
                </body>
            </html>
        )
    }
}

export default DefaultLayout;
