import React, {useState} from 'react';
import "./Admin.css"
import AdminNav from './AdminNav';
import AdminChar from './AdminCharacters/AdminCharacters';
import AdminShoop from './AdminShoop/AdminShoop';

const AdminPanel = () => {

    const [section, setSection] = useState(0);

    const changeToHome = () => setSection(0);
    const changeToCharacters = () => setSection(1);
    const changeToShoop = () => setSection(2);

    return (
        <React.Fragment>
            <div className="admin">
                <div className="admin-navigation">
                    <AdminNav changeToHome={changeToHome} changeToCharacters={changeToCharacters} changeToShoop={changeToShoop} />
                </div>
                <div className="admin-content">
                {section === 1 ? <AdminChar /> : (section === 2 ? <AdminShoop /> : <h2>Welcome to Admin Panel, use menu on the left to navigate</h2>)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminPanel
