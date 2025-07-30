// components/ContactForm.tsx
'use client';

export default function ContactForm() {
  return (
    <form className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      {/* Add other form fields similarly */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
