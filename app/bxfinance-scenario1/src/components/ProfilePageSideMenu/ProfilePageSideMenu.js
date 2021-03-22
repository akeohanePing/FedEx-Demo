import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './ProfilePageSideMenu.css'
import AccountManagement from '../AccountManagement/AccountManagement';
import LoginInformation from '../LoginInformation/LoginInformation'

const pages = [
    {
        header: 'Login & Contact Information'
    },
    {
        header: 'Account Management'
    },
    {
        header: 'FedEx Delivery Manager'
    },
    {
        header: 'Shipping Information'
    },
]

class ProfilePageSideMenu extends React.Component{
    
    state = {
        pageActive: 0
    }

    handleOpenSubPage = (id) =>{
        let newId
        if(id === this.state.pageActive){
            newId = null
        }
        else{
            newId = id
        }
        this.setState({
            pageActive: newId
        })
    }

    render(){
        return(
            <div
                className={"profileSideMenuParent"}
            >
                <div
                    className={'leftProfileDiv'}
                >
                    {pages.map((page, index) =>(
                    <MenuItem
                        classes={{
                            root: 'sideMenuItemRoot',
                            gutters: 'sideMenuGutters'
                        }}
                        onClick={()=>{this.handleOpenSubPage(index)}}
                    >
                        <ListItemIcon
                            classes={{
                                root: 'sideMenuListItemIcon'
                            }}
                        >
                            {this.state.pageActive === index ? <ArrowDropDownCircleIcon fontSize="small"/> : <PlayCircleFilledIcon fontSize="small"/>}
                        </ListItemIcon>
                        <Typography classes={{
                            root: this.state.pageActive === index ? "sideMenuItemSelected" : 'sideMenuItem'
                        }}>
                            {page.header}
                        </Typography>
                    </MenuItem>
                    ))}
                </div>
                <div
                    className={"rightProfileDiv"}
                >
                    {this.state.pageActive === 0 ?
                        <LoginInformation/>
                        : this.state.pageActive === 1 ?
                        <AccountManagement/>
                        :null
                    }
                </div>
            </div>
        )
    }
}

export default ProfilePageSideMenu