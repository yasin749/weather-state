import React from "react";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        this.props.onClose();
    }

    render() {
        const {head, body} = this.props;
        return (
            <div className="popup">
                <div className="black-section" onClick={this.close}></div>
                <div className="content-section-wrapper">
                    <a href="javascript:;" className="close-button aligner adaptLink" onClick={this.close}>X</a>
                    <div className="content-section">
                        <div className="head-block">
                            {head}
                        </div>
                        <div className="body-block">
                            <div className="body-block-inner">
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;