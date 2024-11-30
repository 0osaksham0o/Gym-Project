// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//     const [file, setFile] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploadMessage, setUploadMessage] = useState('');

//     const handleFileChange = (e) => {
//         const uploadedFile = e.target.files[0];
//         setFile(uploadedFile);

//         // Preview the file
//         if (uploadedFile) {
//             const previewURL = URL.createObjectURL(uploadedFile);
//             setPreview(previewURL);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             setUploadMessage('Please select a file first.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('media', file);

//         try {
//             const response = await axios.post('http://localhost:3900/upload', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             setUploadMessage(`File uploaded successfully: ${response.data.filePath}`);
//             setPreview(null); // Clear preview
//         } catch (error) {
//             setUploadMessage(`Error uploading file: ${error.response?.data?.error || error.message}`);
//         }
//     };

//     return (
//         <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
//             <h1>Gym Website - Upload Media</h1>
//             <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//             {preview && (
//                 <div style={{ margin: '20px 0' }}>
//                     <h3>Preview:</h3>
//                     {file.type.startsWith('image/') ? (
//                         <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '300px' }} />
//                     ) : (
//                         <video controls style={{ width: '100%' }}>
//                             <source src={preview} type={file.type} />
//                             Your browser does not support the video tag.
//                         </video>
//                     )}
//                 </div>
//             )}
//             <button onClick={handleUpload} style={{ margin: '10px 0', padding: '10px 20px' }}>
//                 Upload
//             </button>
//             {uploadMessage && <p>{uploadMessage}</p>}
//         </div>
//     );
// };

// export default FileUpload;





// import React, { useState } from 'react';
// import axios from 'axios';
// // import './fileUpload.css'; // Import the CSS file

// const FileUpload = () => {
//     const [file, setFile] = useState(null);
//     const [preview, setPreview] = useState(null);
//     const [uploadMessage, setUploadMessage] = useState('');

//     const handleFileChange = (e) => {
//         const uploadedFile = e.target.files[0];
//         setFile(uploadedFile);

//         // Preview the file
//         if (uploadedFile) {
//             const previewURL = URL.createObjectURL(uploadedFile);
//             setPreview(previewURL);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             setUploadMessage('Please select a file first.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('media', file);

//         try {
//             const response = await axios.post('http://localhost:3900/upload', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             setUploadMessage(`File uploaded successfully: ${response.data.filePath}`);
//             setPreview(null); // Clear preview
//         } catch (error) {
//             setUploadMessage(`Error uploading file: ${error.response?.data?.error || error.message}`);
//         }
//     };

//     return (
//         <div className="file-upload-container">
//             <h1>Gym Website - Upload Media</h1>
//             <p className="upload-description">
//                 Upload your photo to get special diet suggestions and workout training.
//             </p>
//             <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//             {preview && (
//                 <div className="preview-container">
//                     <h3>Preview:</h3>
//                     {file.type.startsWith('image/') ? (
//                         <img src={preview} alt="Preview" className="preview-image" />
//                     ) : (
//                         <video controls className="preview-video">
//                             <source src={preview} type={file.type} />
//                             Your browser does not support the video tag.
//                         </video>
//                     )}
//                 </div>
//             )}
//             <button onClick={handleUpload} className="upload-button">
//                 Upload
//             </button>
//             {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
//         </div>
//     );
// };

// export default FileUpload;



import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);

        // Preview the file
        if (uploadedFile) {
            const previewURL = URL.createObjectURL(uploadedFile);
            setPreview(previewURL);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadMessage('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('media', file);

        try {
            const response = await axios.post('http://localhost:3900/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setUploadMessage(`File uploaded successfully: ${response.data.filePath}`);
            setPreview(null); // Clear preview
        } catch (error) {
            setUploadMessage(`Error uploading file: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',  // Full screen height
                backgroundColor: '#808080', // Gray background
                color: '#ffffff', // White text
                padding: '20px',
            }}
        >
            <h1
                style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#007bff', // Blue color for heading
                    marginBottom: '20px',
                }}
            >
                Gym Website - Upload Media
            </h1>
            <p
                style={{
                    fontSize: '18px',
                    marginBottom: '30px',
                    color: '#ffffff', // White text for description
                    textAlign: 'center',
                }}
            >
                Upload your photo to get special diet suggestions and workout training.
            </p>
            <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                style={{
                    display: 'block',
                    margin: '20px auto',
                    padding: '15px',
                    backgroundColor: '#333',
                    color: '#ffffff',
                    border: '2px solid #444',
                    borderRadius: '8px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    width: '100%',  // Full width for file input box
                    maxWidth: '600px', // Max width for larger screens
                }}
            />
            {preview && (
                <div
                    style={{
                        margin: '20px 0',
                        textAlign: 'center',
                    }}
                >
                    <h3
                        style={{
                            color: '#007bff', // Blue color for preview section
                        }}
                    >
                        Preview:
                    </h3>
                    {file.type.startsWith('image/') ? (
                        <img
                            src={preview}
                            alt="Preview"
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                border: '2px solid #007bff', // Border color to match theme
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <video
                            controls
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                border: '2px solid #007bff', // Border color to match theme
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        >
                            <source src={preview} type={file.type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            )}
            <button
                onClick={handleUpload}
                style={{
                    backgroundColor: '#007bff', // Blue button
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, transform 0.2s ease',
                }}
            >
                Upload
            </button>
            {uploadMessage && (
                <p
                    style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        color: uploadMessage.includes('success') ? '#00ff6a' : '#ff6347', // Green for success, red for error
                    }}
                >
                    {uploadMessage}
                </p>
            )}
        </div>
    );
};

export default FileUpload;
