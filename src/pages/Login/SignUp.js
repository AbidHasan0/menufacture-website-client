import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   const { register, formState: { errors }, handleSubmit } = useForm();
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const [token] = useToken(user || gUser)

   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || "/home";

   let signInError;

   if (loading || gLoading || updating) {
      return <Loading></Loading>
   }
   if (error || gError || updateError) {
      signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
   }
   if (token) {
      navigate(from, { replace: true });
      // navigate('/home')
   }
   const onSubmit = async data => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      console.log('update done');
      navigate('/home')
   };


   return (
      <div className='flex h-screen justify-center items-center'>
         <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
               <h2 class="text-center text-2xl font-bold">Sign Up</h2>
               <form onSubmit={handleSubmit(onSubmit)}>

                  <div class="form-control w-full max-w-xs">
                     <label class="label">
                        <span class="label-text">Name</span>

                     </label>
                     <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                           required: {
                              value: true,
                              message: "Name is required"


                           },

                        })}
                     />
                     <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}


                     </label>
                  </div>

                  <div class="form-control w-full max-w-xs">
                     <label class="label">
                        <span class="label-text">Email</span>

                     </label>
                     <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                           required: {
                              value: true,
                              message: "Email is required"


                           },
                           pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: 'provide a valid email'
                           }
                        })}
                     />
                     <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                     </label>
                  </div>


                  <div class="form-control w-full max-w-xs">
                     <label class="label">
                        <span class="label-text">Password</span>

                     </label>
                     <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Password is required"


                           },
                           minLength: {
                              value: 6,
                              message: 'must be 6 charecter or be longer valid password'
                           }
                        })}
                     />
                     <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                     </label>
                  </div>


                  {signInError}
                  <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
               </form>

               <p><small>Already have an Account ? <Link className='text-primary' to="/login">Please LogIn</Link></small></p>

               <div class="divider">OR</div>
               <button onClick={() => signInWithGoogle()} class="btn btn-secondary">Continue with Google</button>
            </div>
         </div>
      </div>
   );
};

export default SignUp;