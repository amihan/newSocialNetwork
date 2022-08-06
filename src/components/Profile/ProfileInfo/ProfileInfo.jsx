import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className={s.image}
                    src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614610387_167-p-zadnii-fon-dlya-fotoshopa-238.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;