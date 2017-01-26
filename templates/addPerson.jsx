import React from 'react';
import DefaultLayout from './layouts/default';

export default class AddPerson extends React.Component {

    render() {
        return (
            <DefaultLayout>
                <form method='Post'>
                <fieldset>
                    <label>Name: </label>
                    <input type="text" name="name" /><br/>
                </fieldset>
                <fieldset>
                    <label>number</label>
                    <input type="text" name="number" />
                </fieldset>
                <input type='submit' text='submit'/>
                <a href="/" >
                    <button onClick="return false;">back</button>
                </a>
                </form>
            </DefaultLayout>
        )
    }
}
