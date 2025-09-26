import '../App.css';

function BookForm() {
    return (
        <div className='form-container'>
            <h2>Add Book</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='title' className="form-label">Title</label>
                    <input
                        type='text'
                        name='title'
                        className='form-input'
                        placeholder='Book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-author' className="form-label">Author</label>
                    <input
                        type='text'
                        name='pr-author'
                        className='form-input'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-publisher' className="form-label">Publisher</label>
                    <input
                        type='text'
                        name='pr-publisher'
                        className='form-input'
                        placeholder='Publisher name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-publicationYear' className="form-label">Publication Year</label>
                    <input
                        type='text'
                        className='form-input'
                        name='pr-publicationYear'
                        placeholder='Year'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-language' className="form-label">Language</label>
                    <input
                        type='text'
                        name='pr-language'
                        className='form-input'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-pages' className="form-label">Pages</label>
                    <input
                        type='text'
                        name='pr-pages'
                        className='form-input'
                        placeholder='e.g. 235'
                    />
                </div>
                <div className='button-container'>
                     <button className='saveButton'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;
