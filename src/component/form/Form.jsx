import React from 'react'

const Form = () => {
    const arr = []
    const formSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        let itemForm = document.getElementById('myForm'); 
        let checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');
        let result = [];

        checkBoxes.forEach(item => {
            if (item.checked) {  
                // let data = {   
                //     item: item.value,
                //     selected: item.checked
                // }
                let data = item.value  
                result.push(data);
            }
        })
        data.append("qualification", result);


        const formData = {
            userName : data.get('userName'),
            userPassword : data.get('userPassword'),
            userEmail : data.get('userEmail'),
            profile : data.get('profile'),
            state : data.get('state'),
            userAddress : data.get('userAddress'),
            gender : data.get('gender'),
            qualification : data.get('qualification'),
        }

        console.log('result',result)
        console.log(formData)
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row justify-content-evenly">
                    <div className="col-10">
                        <form onSubmit={formSubmit} id='myForm'>
                            <div className="row g-2">
                                <div className="col-4">
                                    <input type="text" name='userName' className='form-control' placeholder='Enter Your Username' />
                                </div>
                                <div className="col-4">
                                    <input type="text" name='userEmail' className='form-control' placeholder='Enter Your Email' />
                                </div>
                                <div className="col-4">
                                    <input type="password" name='userPassword' className='form-control' placeholder='Enter Your Password' />
                                </div>
                                <div className="col-4">
                                    <select name="state" id="" className='form-control'>
                                        <option value="">Select State</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Delhi">Delhi</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select name="profile" id="" className='form-control'>
                                        <option value="">Select Profile</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Developer">Developer</option>
                                        <option value="BA">BA</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" name='userEmail' className='form-control' placeholder='Enter Your Email' />
                                </div>
                                <div className="col-12">
                                    <textarea name="userAddress" id="" cols="" rows="3" className='form-control'></textarea>
                                </div>
                                <div className="col-2">
                                    <p>Qualification :</p>
                                </div>
                                <div className="col-2">
                                    <div class="form-check">
                                        <input class="form-check-input"  type="checkbox" value="12th" id="12th" />
                                        <label class="form-check-label" for="12th">
                                            12th
                                        </label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="form-check">
                                        <input class="form-check-input"  type="checkbox" value="BCA" id="bca" />
                                        <label class="form-check-label" for="bca">
                                            BCA
                                        </label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="B Tech" id="btech" />
                                        <label class="form-check-label" for="btech">
                                            B. Tech
                                        </label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="MCA" id="mca" />
                                        <label class="form-check-label" for="mca">
                                            MCA
                                        </label>
                                    </div>
                                </div>
                                <div className="col-2 ">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="M Tech" id="mtech" />
                                        <label class="form-check-label" for="mtech">
                                            M. Tech
                                        </label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <p>Select Gender :</p>
                                </div>
                                <div className="col-4">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" />
                                            <label class="form-check-label" for="male">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" />
                                            <label class="form-check-label" for="female">Female</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className='btn btn-sm btn-primary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form