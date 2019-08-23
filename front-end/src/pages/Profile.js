import React from 'react';


import './Profile.css'


const Profile = ({ profile: { username , email, profile_photo, join_date, location}}) => {
    return (

    <>
    {/* <div>
            <p><strong>Username</strong> {username}</p>
            <p><strong>Email</strong> {email}</p> 
            <p><strong>Photo</strong> {profile_photo}</p>  
            <p><strong>Join Date</strong> {join_date}</p> 
            <p><strong>Location</strong> {location}</p>
    </div> */}

    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                    </div>
                </div>
            <div class="col-md-6">
                <div class="profile-head">
                    <h5>
                        <p><strong>Username:</strong> {username}</p>
                    </h5>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
                </div>
            </div>
            <div class="col-md-2">

            </div>
            </div>


    <div class="col-md-8">
        <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row">
    <div class="col-md-6">
    <label>Email:</label>
    </div>
    <div class="col-md-6">
    <p>{email}</p>
    </div>
    </div>
            </div>
    <div class="row">
        <div class="col-md-6">
            <label>Join Date:</label>
            </div>
    <div class="col-md-6">
        <p>{new Date(join_date).toLocaleDateString()}</p>
        </div>
    </div>
        <div class="row">
            <div class="col-md-6">
                <label>Location:</label>
            </div>
    <div class="col-md-6">
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


export default Profile;