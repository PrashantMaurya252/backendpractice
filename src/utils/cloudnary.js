import {v2 as cloudnary} from 'cloudinary'
import fs from 'fs'

cloudnary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
       const response= await cloudnary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log(response)
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary",response.url)
        console.log(localFilePath)
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        } else {
            console.log('File does not exist, cannot delete.');
        }
        return response
    } catch (error) {
        console.log(error,'error')
        console.log(localFilePath,"catch")
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        } else {
            console.log('File does not exist, cannot delete.');
        }  // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}

