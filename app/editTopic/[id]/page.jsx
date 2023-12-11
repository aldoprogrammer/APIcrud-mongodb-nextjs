import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: 'no-cache',
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        const data = await res.json();

        return { topic: data }; // Wrap data in an object to ensure consistent structure
    } catch (error) {
        console.error(error);
        return { topic: null }; // Return null or handle error appropriately
    }
};

export default async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicById(id);

    if (!topic) {
        // Handle case where topic is not available
        console.error(`Topic with ID ${id} not found`);
        return <p>Topic not found</p>;
    }

    const { title, description } = topic;

    return <EditTopicForm id={id} title={title} description={description} />;
}
