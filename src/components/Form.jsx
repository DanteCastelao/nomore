import { useState } from "react";

export default function Form() {
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://nomore-1f971c0714b0.herokuapp.com/upload', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
  
      const data = await response.json();
      alert('Image uploaded successfully! URL: ' + data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image');
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" placeholder="Enter name" />
      <input type="file" name="image" accept="image/*" />
      <button>Upload</button>
      {error && <div>{error}</div>}
    </form>
  );
}