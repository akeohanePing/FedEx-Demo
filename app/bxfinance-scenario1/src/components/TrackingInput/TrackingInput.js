import React from 'react'
import './TrackingInput.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TrackingInput extends React.Component {
    render(){
        return(
            <div
                className={'inputParent'}
            >
                <TextField
                    classes={{
                        root: 'trackingTextField'
                    }}
                    InputProps={{
                        classes: {
                            root: 'inputRoot',
                            underline: 'inputUnderline',
                            focused: 'inputFocused'
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                            root: 'trackingLabel',
                            focused: 'inputLabelFocused'
                        }
                    }}
                    label="Tracking ID"
                    variant="filled"    
                />
                <Button
                    classes={{
                        root: 'submitButton',
                        text: 'submitButtonLabel'
                    }}
                    variant="text">
                    Default
                </Button>
                <p
                    className={'underTrackingText'}
                >
                   <span className={"clickableSpan"}>MULTIPLE TRACKING NUMBERS</span> &nbsp;&nbsp; | &nbsp;&nbsp;<span className={"clickableSpan"}>NEED HELP?</span>
                </p>
            </div>
        )
    }
}

export default TrackingInput