import React from 'react'
import ProfilePageSideMenu from '../../components/ProfilePageSideMenu/ProfilePageSideMenu'
import './ProfilePage.css'
import NavBarMain from '../../components/NavbarMain/NavbarMain'
import BottomBar from '../../components/BottomBar'

class ProfilePage extends React.Component{

    state = {

    }
    render(){
        return(
            <div>
                <NavBarMain/>
                <div
                    className={'profilePageParent'}
                >

                    <div
                        className={'profilePageTop'}
                    >
                        My Profile
                    </div>
                    <ProfilePageSideMenu/>
                    <div
                        className={'profilePageBottom'}
                    >
                    </div>
                </div>
                <BottomBar/>
            </div>
        )
    }
}

export default ProfilePage