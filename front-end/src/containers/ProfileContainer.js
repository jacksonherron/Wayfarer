import React from 'react';



import './ProfileContainer.css'


    
    


const ProfileContainer = ( { profile: { username , email, profile_photo, join_date, location } } ) => {

   

    
    return (

    <>

    <div className="container emp-profile">
        <form  method="post" encType="multipart/form-data" >
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src={profile_photo} alt="user"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <div className="form-group">
                                    <label htmlFor="image">Image url</label>
                                    <input type="text" id="image" name="image" />
                                </div>
            
            
                                </div>
                                <div>

                                </div>
                                
                    </div>
                </div>
            <div className="col-md-6">
                <div className="profile-head">
                    <h5>
                        <p><strong>Username:</strong> {username}</p>
                    </h5>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-md-2">

            </div>
            </div>


    <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
    <div className="col-md-6">
    <label>Email:</label>
    </div>
    <div className="col-md-6">
    <p>{email}</p>
    </div>
    </div>
            </div>
    <div className="row">
        <div className="col-md-6">
            <label>Join Date:</label>
            </div>
    <div className="col-md-6">
        <p>{new Date(join_date).toLocaleDateString()}</p>
        </div>
    </div>
        <div className="row">
            <div className="col-md-6">
                <label>Location:</label>
            </div>
    <div className="col-md-6">
            <p>{location}</p>
            
            </div>
        </div>

    </div>
</div>



</form>      
    
</div>

     </>
);
};


export default ProfileContainer;