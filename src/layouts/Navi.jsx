import React ,{useState}from 'react'
import {  Container, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SingnedIn';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navi() {
    const { cartItems } = useSelector((state) => state.cart);
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    let navigate  = useNavigate();

    function handleSignOut() {
        setIsAuthenticated(false)
        navigate("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item
                        name='home'
                        as={NavLink} 
                        to="/"
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {
                            isAuthenticated?
                            <SignedIn signOut={handleSignOut}/>
                            :<SignedOut signIn={handleSignIn}/>
                        }                                               
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
