'use client';

import { useState } from "react";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title n Desc Required");
            return;
        }
    }

    return (
        <>
            <div>Add Topic</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                    className="border border-slate-500
                    px-8 py-2" 
                    type="text"
                    placeholder="Topic Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <input 
                    className="border border-slate-500
                    px-8 py-2" 
                    type="text"
                    placeholder="Topic Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />

                <button 
                    type="submit"
                    className="bg-green-600 font-bold
                text-white py-3 px-6 w-fit">
                    Add Topic
                </button>
            </form>
        </>
    )
}