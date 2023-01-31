import "./style.css"
export default function QuickDraft() {
    return (
        <form className="quick-draft">
            <h1 className="special-box-title">Quick Draft</h1>
            <p>Write A Draft For Your Ideas</p>
            <input type="text" name="title" id="" placeholder="Title" />
            <textarea name="title" id="" placeholder="Your Thought" />
            <input type="submit" value="save" className="save-button" />
            
        </form>
    );
}
