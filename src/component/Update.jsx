import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const Update = () => {

    const onSubmit = async(e)=>{
     e.preventDefault()
     const name=e.target.name.value;
     const image=e.target.image.value;
     console.log('name',name,image)
     await authClient.updateUser({
    image,
    name
})
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button
  className="btn btn-primary text-center w-full"
  onClick={() => document.getElementById('my_modal_5').showModal()}
>
  <FaEdit></FaEdit> Edit Profile
</button>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Information</h3>
    <p className="py-2 text-sm opacity-70">
      Update your name and profile image URL below.
    </p>

   <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <fieldset className="fieldset">
    <label className="label">Name</label>
    <input type="text" className="input validator" name="name" placeholder="name" required />
    <p className="validator-hint hidden">Required</p>
  </fieldset>

  <label className="fieldset">
    <span className="label">Image url</span>
    <input type="url" className="input validator" placeholder="url" name='image' required />
    <span className="validator-hint hidden">Required</span>
  </label>

  <button className="btn btn-neutral mt-4" type="submit">submit</button>
<button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>
          close
        </button></form>
  </div>
</dialog>
        </div>
    );
};

export default Update;