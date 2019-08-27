import React from 'react';
import { Widget } from "@uploadcare/react-widget";
import './ProfileContainer.css'


const ProfileContainer = ( {user: { username , email, profile_photo, join_date, location }, onSubmit, onChange}) => {
    console.log(username , email, profile_photo, join_date, location);
    return (

        
          


    <>
    
    

    <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="Username">Username</label>
                                        <input type="text" id="username" name="username" value={username} onChange={onChange} className="form-control form-control-lg" />
                                    </div>
                                    <div>
                                        <label htmlFor="email-register">Email</label>
                                        <input type="email" id="email" name="email" value={email} onChange={onChange} className="form-control form-control-lg"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Location">Location</label>
                                        <input type="text" id="edit" name="location" value={location} onChange={onChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text">Photo</label>
                                        <input type="text" id="edit-photo" name="profile_photo" value={profile_photo} onChange={onChange} className="form-control form-control-lg" />
                                    </div>
                                </form>
                            </div>
                            <button onClick={onSubmit} className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div> 

    <div className="container emp-profile">
        <form  method="post" encType="multipart/form-data" >
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src={profile_photo} alt="user"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                
                                
    
            
            
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
<button className="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Edit Profile</button>
</div>
</>
);
};


export default ProfileContainer;