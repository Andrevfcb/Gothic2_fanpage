import React, {useState, useContext} from 'react';
import './Header.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { useHttpClient } from '../hooks/http-hook';

import { useForm } from "../hooks/form-hook"
import ErrorModal from "../UIElements/ErrorModal"
import Modal from "../UIElements/Modal"
import LoadingSpinner from "../UIElements/LoadingSpinner"
import { AuthContext } from '../context/auth-context';

import Button from "../FormElements/Button"
import Auth from '../Body/Auth';
import Cart from '../Body/Cart';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import skull from "../../Images/skull.png";

const Header = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const [isLoginModal, setIsLoginModal] = useState(true);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);

    const closeModal = () => {
      setShowLoginModal(false)
      setShowCartModal(false)
    }
    const openModal = (e) => {
      if (e.target.id === "auth") return setShowLoginModal(true);
      else return setShowCartModal(true)
    }

    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const switchModeHandler = () => {
        if (!isLoginModal) {
          setFormData(
            {
              ...formState.inputs,
              userName: undefined,
              avatar: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid
          );
        } else {
          setFormData(
            {
              ...formState.inputs,
              userName: {
                value: '',
                isValid: false
              },
              avatar: {
                value: null,
                isValid: false
              }
            },
            false
          );
        }
        setIsLoginModal(prevMode => !prevMode);
      };

      const userSubmitHandler = async event => {
        event.preventDefault();
        
        if (isLoginModal) {
          try {
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
              'POST',
              JSON.stringify({
                email: formState.inputs.email.value,
                password: formState.inputs.password.value
              }),
              {
                'Content-Type': 'application/json'
              }
            );
            auth.login(responseData.userId, responseData.token, responseData.avatar, responseData.role);
            setIsLoginModal(true);
            closeModal();
          } catch (err) {}
        } else {
          try {
              
            const formData = new FormData();
            formData.append('email', formState.inputs.email.value);
            formData.append('name', formState.inputs.userName.value);
            formData.append('password', formState.inputs.password.value);
            formData.append('avatar', formState.inputs.avatar.value);
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/users/signup`,
              'POST',
              formData
            );
            auth.login(responseData.userId, responseData.token, responseData.avatar, responseData.role);
            setIsLoginModal(true);
            closeModal();
          } catch (err) {}
        }
      };

      const openDrawerHandler = () => {
        setDrawerIsOpen(true);
      };
    
      const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
      };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
              <nav className="main-navigation__drawer-nav">
          <Navigation openModal={openModal} />
              </nav>

            </SideDrawer>
            <Modal
            show={showLoginModal}
            onCancel={closeModal}
            header=
            {
              <React.Fragment>
                {isLoading && <LoadingSpinner asOverlay />}
                  <h2>{isLoginModal ? "Login" : "Signup"}</h2>
                  <span class="fas fa-times" onClick={closeModal} />
                  {isLoginModal ? <Button onClick={switchModeHandler}>Change to Signup</Button> : 
                  <Button onClick={switchModeHandler}>Change to Login</Button>}
            </React.Fragment>
              
          }
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            >
                <Auth userSubmitHandler={userSubmitHandler} isLoginModal={isLoginModal} inputHandler={inputHandler} formState={formState} />
            </Modal>
            <Modal
            show={showCartModal}
            onCancel={closeModal}
            style={{background: "url(https://wallpaperaccess.com/full/983279.jpg)"}}
            header=
            {
              <React.Fragment>
                {isLoading && <LoadingSpinner asOverlay />}
                  <h2>Cart</h2>
                  <span class="fas fa-times" onClick={closeModal} />
            </React.Fragment>
          }
            >
                <Cart closeModal={closeModal} />
            </Modal>
        <div className='header'>
        <Link to= "/" exact>
            <div className='logo title'>
              <img src={skull} alt="Skull" className="skull"></img>
                <span>Gothic II Fanpage</span>
            </div>
                </Link>
              <button
                className="main-navigation__menu-btn"
                onClick={openDrawerHandler}
                >
                <span />
                <span />
                <span />
              </button>
            <div className='navigation'><Navigation openModal={openModal} /></div>
        </div>
        </React.Fragment>
    )
}

export default Header
