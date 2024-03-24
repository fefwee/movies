import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../fairbase';
import { idText } from 'typescript';

const AuthPage = ({ title, titleBtn }: any) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [user, setUser] = useState<any>('');



    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(userName, userPassword);
    }

    const registerUser = (e: any) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, userName, userPassword).
            then((user: any) => {
                console.log(user);
                setUserName('');
                setUserPassword('');
            })
    }

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userName, userPassword).
            then((user: any) => {
                console.log(user);
                setUserName('');
                setUserPassword('');
            })
    }

    const logOut = () => {
        signOut(auth).
            then(() => console.log('success'))
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])

    return (
        <div>
            <button onClick={openModal}>{titleBtn}</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={style.container}>
                    <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
                        {title}
                    </h1>
                    <div className={style.formContainer}>
                        <form className={style.formUser} onSubmit={handleSubmit}>
                            <div className={style.userField}>
                                <label htmlFor="userName">Имя пользователя</label>
                                <input type="text"
                                    placeholder='Почта'
                                    id='userName'
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className={style.userField}>
                                <label htmlFor="userPassword">Пароль</label>
                                <input type="text"
                                    placeholder='пароль'
                                    id='userPassword'
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </div>
                            <div className={style.submitButton}>
                                <Button title={titleBtn} onClick={signIn}>Войти</Button>
                                <Button title={titleBtn} onClick={logOut}>выйти</Button>
                            </div>
                            <div>{user ? JSON.stringify(user): 'no user'}</div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AuthPage