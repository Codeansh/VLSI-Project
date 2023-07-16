"use client"
import React, { useState } from 'react';
import Select from "react-dropdown-select";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { dragOptions } from './constants';
import findError, {setNewError, setNewData } from './utilities';
import { form_fields } from './constants';


const MembershipForm: React.FC = () => {

    const [submitDisable, setSubmitDisable] = useState<boolean>(true);
    const [Error, setError] = useState<{ name: string; value: string }[]>([]);
    const [formData, setFormData] = useState<{ name: string; value: any }[]>([]);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)
    };

    const handleClick = (e: any) => {
        form_fields.forEach((field) => {
            const formDataField = formData.find((data) => data.name === field);
            if (!formDataField || !formDataField.value) {
                setNewError(field, "Above Field is Required", setError);
                setSubmitDisable(true)
            }
        });
    };
    const handleNullField = (id: string, value: any, error: string) => {
        setNewData(id, value, setFormData);
        if (!value?.length) {
            setNewError(id, error, setError)
            setSubmitDisable(true)
        }
        else {
            setNewError(id, "", setError)
            setSubmitDisable(false)
        }
    }


    return (
        
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#0a0032] to-[#0a0932]">
            <form autoComplete="off" className=" h-4/5 w-full max-w-lg bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>

                {/* Heading */}
                <div className='bg-[#efefef] mt-1 p-4 border-b-2'>
                    <h2 className="text-4xl font-bold text-center text-[#0a0032]">Membership Form</h2>
                </div>

                <div className="bg-[#f0f0f0] px-6 overflow-auto no-scrollbar h-4/5 w-full 3 max-w-lg">

                    {/* Name-Prefix */}
                    <div className="my-6">
                        <label htmlFor="name_prifix" className="block text-[#0a0032] text-lg font-semibold mb-2">Name Prefix</label>
                        <Select
                            required
                            placeholder="Select" values={[]} className='!w-full !bg-white !text-[#0a0032] !placeholder-gray-500 !border-[#262137] !border-solid !border-2 !rounded-lg !px-4 !py-3 focus:outline-none focus:ring-2 focus:ring-[#0a0032] focus:bg-slate-500 shadow-md' options={dragOptions[0].name_prefix} labelField="name" valueField="id"
                            onChange={(value) => handleNullField("name_prefix", value[0]?.name, "Name Prefix is required")}
                        />
                        <span className="text-red-500 text-sm"><>{findError('name_prefix', Error)?.error}</></span>
                    </div>

                    {/* First-Name`` */}
                    <div className="mb-6">
                        <label htmlFor="first_name" className="block text-[#0a0032] text-lg font-semibold mb-2">First Name</label>
                        <input
                            required
                            
                            pattern="[A-Za-z]+"
                            title="Please enter only alphabets" 
                            id="first_name"
                            onChange={(event) => handleNullField("first_name", event.target.value, "First name is required")}
                            className="w-full bg-white text-[#0a0032] placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
                        />
                        <span className="text-red-500 text-sm"><>{findError('first_name', Error)?.error}</></span>
                    </div>

                    {/* Last-Name */}
                    <div className="mb-6">
                        <label htmlFor="last_name" className="block text-[#0a0032] text-lg font-semibold mb-2">Last Name</label>
                        <input
                            required
                            onChange={(event) => handleNullField("last_name", event.target.value, "Last name is required")}
                            type="text"
                            id="last_name"
                            className="w-full bg-white text-[#0a0032] placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
                        />
                        <span className="text-red-500 text-sm"><>{findError('last_name', Error)?.error}</></span>
                    </div>

                    {/* Gender */}
                    <div className='mb-6'>
                        <label htmlFor="gender" className="block text-[#0a0032] text-lg font-semibold mb-2">Gender</label>
                        <Select onChange={(value) => {
                            handleNullField("gender", value[0]?.name, "Gender is required")
                        }}
                            required placeholder="Select" values={[]} className='!w-full !bg-white !text-[#0a0032] !placeholder-gray-500 !border-[#0a0032] !border-solid !border-2 !rounded-lg px-4 !py-3 focus:outline-none focus:ring-2 focus:ring-[#0a0032]' options={dragOptions[0].gender} labelField="name" valueField="id"
                        />
                        <span className="text-red-500 text-sm"><>{findError('gender', Error)?.error}</></span>
                    </div>

                    {/* Category */}
                    <div className='mb-6'>
                        <label htmlFor="category" className="block text-[#0a0032] text-lg font-semibold mb-2">Category</label>
                        <Select required placeholder="Select" values={[]} className='!w-full !bg-white !text-[#0a0032] !placeholder-gray-500 !border-[#0a0032] !border-solid !border-2 !rounded-lg px-4 !py-3 focus:outline-none focus:ring-2 focus:ring-[#0a0032] ' options={dragOptions[0].category} labelField="name" valueField="id"
                            onChange={(value) => {
                                handleNullField("category", value[0]?.name, "Category is required")
                            }}
                        />
                        <span className="text-red-500 text-sm"><>{findError('category', Error)?.error}</></span>
                    </div>

                    {/* Organization */}
                    <div className="mb-6">
                        <label htmlFor="organization" className="block text-[#0a0032] text-lg font-semibold mb-2">Current Organization</label>
                        <input
                            required
                            type="text"
                            id="organization"
                            onChange={(event) => handleNullField("organization", event.target.value, "Organization is required")}
                            className="w-full bg-white text-[#0a0032] placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        />
                        <span className="text-red-500 text-sm"><>{findError('organization', Error)?.error}</></span>
                    </div>

                    {/* Designation */}
                    <div className="mb-6">
                        <label htmlFor="designation" className="block text-[#0a0032] text-lg font-semibold mb-2">Designation</label>
                        <input
                            required
                            type="text"
                            id="designation"
                            className="w-full bg-white text-[#0a0032] placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            onChange={(event) => handleNullField("designation", event.target.value, "Designation is required")}
                        />
                        <span className="text-red-500 text-sm"><>{findError('designation', Error)?.error}</></span>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-[#0a0032] text-lg font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            pattern='^\S+@\S+$'
                            className="w-full bg-white text-[#0a0032] placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            onChange={(event) => handleNullField("email", event.target.value, "Email is required")}
                        />
                        <span className="text-red-500 text-sm"><>{findError('email', Error)?.error}</></span>
                    </div>

                    {/* Phone Number */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-[#0a0032] text-lg font-semibold mb-2">Mobile Number</label>
                        <div className='parent-element'>
                            <PhoneInput
                                placeholder="Enter phone number"
                                onChange={(value) => {
                                    handleNullField("phone", value, "Designation is required")
                                    if (!isValidPhoneNumber(value || '')) {
                                        setSubmitDisable(true)
                                        setNewError("phone", "Invalid Phone Number", setError)
                                    } else {
                                        setSubmitDisable(false)
                                        setNewError("phone", "", setError)
                                    }
                                }}
                                className={"input-phone-number !w-full !bg-white !text-[#0a0032] !placeholder-gray-500 border-[#0a0032] border-solid border-2 rounded-lg px-4 !py-3 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "}
                            />
                        </div>
                        <span className="text-red-500 text-sm"><>{findError('phone', Error)?.error}</></span>
                    </div>

                    {/* Area of Expertize */}
                    <div className='mb-6'>
                        <label htmlFor="exp_area" className="block text-[#0a0032] text-lg font-semibold mb-2">Area of Expertize</label>
                        <Select required placeholder="Select" values={[]} className='!w-full !bg-white !text-[#0a0032] !placeholder-gray-500 !border-[#0a0032] !border-solid !border-2 !rounded-lg px-4 !py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ' options={dragOptions[0].exp_area} labelField="name" valueField="id"
                            onChange={(value) => handleNullField("exp_area", value[0]?.name, "Area of Expertize is required")}
                        />
                        <span className="text-red-500 text-sm"><>{findError('exp_area', Error)?.error}</></span>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="exp_area" className="block text-[#0a0032] text-lg font-semibold mb-2">Membership Fee (3 Years)</label>
                        <div className='w-full h-full bg-white text-[#0a0032] placeholder-gray-500 !border-[#8e8e8e] border-solid border-2 rounded-lg px-4 py-3'>
             
                            {  ! (formData.find((v) => v.name === 'category')) ?
                            
                                    <span className='text-[#0a0032]'>Select Category</span>
                            :
                                formData.map((v) => {
                                    if (v.name === 'category'){
                                        if (v.value?.length)
                                            return <span>{dragOptions[0].membership_fee.find((c) => c.category === v.value)?.price}</span>
                                        else
                                            return <span className='text-[#0a0032]'>Select Category</span>
                                    }
                                }
                            )
                        }
                        </div>
                    </div>

                </div>

                {/*SUBMIT  BUTTON */}
                <div className='bg-[#efefef] p-3 border-t-2'>  
                    <button disabled={submitDisable} onClick={handleClick} type="submit" className={`w-full bg-[#0603a4] ${!submitDisable ? 'active:bg-[#0a0032]' : 'active:bg-[#0603a4]' } text-white font-bold p-4 px-6 rounded-lg`}>
                            Submit
                        </button>
                </div>

            </form>

        </div>
    );
};

export default MembershipForm; 
