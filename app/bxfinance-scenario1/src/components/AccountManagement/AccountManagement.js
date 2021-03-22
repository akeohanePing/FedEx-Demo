import React from 'react'
import Divider from '@material-ui/core/Divider';
import ToggleSwitch from '../ToggleSwitch'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './AccountManagement.css'

const toggleArray = [
    {
        heading: 'News and Tips',
        smallText: 'News, information, and insight from FedEx.',
        indent: false,
    },
    {
        heading: 'FedEx E-Newsletter',
        smallText: 'Monthly FedEx Updates offers advice and strategies designed to help your business succeed.',
        indent: true,
    },
    {
        heading: 'Access Email',
        smallText: 'Monthly updates about people, ideas, and trends that are shaping global connectivity',
        indent: true,
    },
    {
        heading: 'Service Disruption Notifications',
        smallText: 'Alerts abouts any service disruptions or weather delays that disrupt the FedEx network. Alerts do not contain information about individual shipments.',
        indent: false,
    },
    {
        heading: 'FedEx Regulatory News',
        smallText: 'Fast access to information on trade-related rules, regulations, updates and other topics relevant to you and your business',
        indent: false,
    },
    {
        heading: 'Developer Resources',
        smallText: 'Product information for FedEx Ship Manager® Server and Fedex Web Services. Notifications are in English only.',
        indent: false,
    },
]


class AccountManagement extends React.Component{
    
    state = {
        checkboxClicked: false
    }

    handleCheckBox = () =>{
        this.setState({
            checkboxClicked: !this.state.checkboxClicked
        })
    }
    
    render(){
        return(
            <div
                className='secondaryParent'
            >
                {/* <Divider/> */}
                {toggleArray.map((item,index)=>(
                    <div
                    className={item.indent? "toggleParent indent": 'toggleParent'}
                    >
                        <ToggleSwitch id={index + 'switch'}></ToggleSwitch>
                        <div
                            className={'toggleTextContainer'}
                        >
                            <h4 className={`toggleHeader`}>{item.heading}</h4>
                            <p className={'toggleSmallText'}>{item.smallText}</p>
                        </div>
                    </div>
                ))}
                <Divider/>
                <div
                    className={'secondaryPageBottomParent'}
                >
                    <FormControlLabel
                        classes={{
                            root: 'secondPageCheckbox',
                            label: 'formBoldLabel'
                        }}
                        control={<Checkbox classes={{colorSecondary: 'checkBoxDropDown'}} checked={this.state.checkboxClicked} onChange={this.handleCheckBox} name="checkedA" />}
                        label="I have read, understood and agree to be bound by the following. I also understand how FedEx intends to use my information."
                    />
                    <ul>
                        <li className={'purpleClickableText'}>fedex.com Terms of Use</li>
                        <li className={'purpleClickableText'}>Privacy Policy</li>
                    </ul>  
                </div>
            </div>
        )
    }
}

export default AccountManagement