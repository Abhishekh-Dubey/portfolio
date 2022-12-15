import React from 'react';
import "./Brand.css";


const Brand= () => {
    return (<div className='MainBackground'>
    <h1 className='group'>Brand</h1>
    <div className='maincontaineBrand1'>
<div className=' gridMaincontaineBrand1'>
<div className='brandgrid1'> App name : </div>
<div className='brandgrid2'><input   type="text" placeholder="Search.." name="search2" required/></div>
<div className='brandgrid3'>The name of your appplication</div>
<div className='brandgrid4'>App Logo : </div>
<div className='brandgrid5'><input  type="File" id="file" accept='image/*'/></div>
<div className='brandgrid6'>A 512x512 logo of your application (.png or .jpeg)</div>
<div className='brandgrid7'>Organization name :</div>
<div className='brandgrid8'><input  type="text" placeholder="Flynetics" name="search2" required/></div>
<div className='brandgrid9'>The name of your Organization</div>
<div className='brandgrid10'>Organization webside :</div>
<div className='brandgrid11'><input  type="text" placeholder="https://github.com/flynetic" name="search2"   required/></div>
<div className='brandgrid12'>The website URL of your Organization</div>
<div className='brandgrid13'><button  const path ='./SignUp' type="button"  className='cancelbtn1'>Delete</button></div>
<div className='brandgrid14'><button className='button22' type="submit">Save and Continue editing</button></div>
<div className='brandgrid15'><button className='button21' type="submit">Save</button></div>

</div>

</div>
    </div>
   ) }

   export default Brand;