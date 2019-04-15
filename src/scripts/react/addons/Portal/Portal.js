import React from 'react';
import ReactDOM from 'react-dom';


class Portal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }


    render() { 
        return ReactDOM.createPortal(
            <div className="pop_up">
                <a className="close_portal">x</a>
                {this.render.props.children}
            </div>,
            this.root
        )
    }
}
 
export default Portal;