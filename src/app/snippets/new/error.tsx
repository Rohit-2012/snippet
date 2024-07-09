'use client'

interface ErrorPageProp {
    error: Error,
    reset: () => void
}

const CreateSnippetError = ({error}: ErrorPageProp) => {
    return (
        <div>
            {error.message}
        </div>
    );
}

export default CreateSnippetError;