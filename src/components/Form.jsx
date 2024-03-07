import React, { useState } from "react";

export default function Form() {
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://nomore-back-end.onrender.com/upload', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
  
      const data = await response.json();
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image');
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" placeholder="Enter name" />
      <input type="file" name="mainImage" accept="image/*" />
      <input type="file" name="detailImages" accept="image/*" multiple />
      <button>Upload</button>
      {error && <div>{error}</div>}
    </form>
  );
}