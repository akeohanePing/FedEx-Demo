// Packages
import React, { useState } from 'react';
import { Collapse, Button  } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom'

// Styles
import "./AccountsSubnav.scss";

const AccountsSubnav = (props) => {
  const [isOpen, setIsOpen] = useState(props.subnav.open);
  const toggle = () => setIsOpen(!isOpen);
  console.log(props)
  const location = useLocation();
  return (
    <div className="accounts-subnav">
      <Link to={props.subnav.title === 'Profile & Settings' ? '/communication-preferences': location.pathname} onClick={toggle}>{props.subnav.title}</Link>
      { props.subnav.links && 
        <Collapse isOpen={isOpen}>
          <hr />
          <nav>
            <ul>
              {
                Object.keys(props.subnav.links).map(key => {
                  return (
                    /* PING INTEGRATION: Added logic to render Link as anchor to PF profile mgmt when it's Personal Details */
                      props.subnav.links[key].title == "Personal Details" ? 
                      <li key={key}><a href="/pf/idprofile.ping?LocalIdentityProfileID=defaultIdentityProfile"  className={props.subnav.links[key].active ? "active" : ""}>{props.subnav.links[key].title}</a></li>
                      :
                      <li key={key}><Link to={'/communication-preferences'} className={props.subnav.links[key].active ? "active" : ""}>{props.subnav.links[key].title}</Link></li>
                      // <li onClick={()=>console.log('hi how are ya')} key={key}className={props.subnav.links[key].active ? "active" : ""}>{props.subnav.links[key].title}</li>
                  );
                })      
              }
            </ul>
          </nav>
        </Collapse>
      }
    </div>
  );
};

export default AccountsSubnav;
