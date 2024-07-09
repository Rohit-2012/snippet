import SnippetEditor from "@/components/SnippetEditor"
import { db } from "@/db"
import { notFound } from "next/navigation"

interface EditSnippetProps {
    params: {
        id: string
    }
}

const EditSnippetPage = async ({params}: EditSnippetProps) => {
    const id = parseInt(params.id)
    const snippet = await db.snippet.findFirst({
        where: {id}
    })

    if (!snippet) {
        return notFound()
    }

    return (
        <div>
            <SnippetEditor snippet={snippet} />
        </div>
    );
}

export default EditSnippetPage;